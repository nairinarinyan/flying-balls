const sceneWidth = window.innerWidth * devicePixelRatio;
const sceneHeight = window.innerHeight * devicePixelRatio;

const colors = ['#C47AC0', '#2F323Al', '#41393E', '#C7E8F3', '#EB5E28', '#4A5899', '#559CAD', '#7CAE7A', '#A72608', '#F0F2A6', '#1A1B25', '#CE0357', '#A507D7', '#61C9A8', '#ED9B40', '#0B3142'];
const gravity = [0, 1900];

const minRadius = 10;
const maxRadius = 40;

const minVelocity = -3000;
const maxVelocity = 3000;

const computeDistance = ([x1, y1], [x2, y2]) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
const computeSum = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];
const multiply = ([x, y], k) => [x * k, y * k];
const squash = (x, min, max, rangeMin, rangeMax) => min + (x - rangeMin) * (max - min) / (rangeMax - rangeMin);

const getRandom = (min, max, int) => {
    const ret = Math.random() * (max - min) + min;
    return int ? Math.round(ret) : ret;
};

const initCanvas = () => {
    const canvas = document.querySelector('canvas');
    canvas.width = sceneWidth;
    canvas.height = sceneHeight;
    const ctx = canvas.getContext('2d');
    return ctx;
};

const initLineControls = () => {
    const lineControl = document.querySelector('#line-control');
    let showLines = lineControl.checked;

    lineControl.addEventListener('change', () => {
        showLines = lineControl.checked;
    });

    return () => showLines;
};

const generateRandomBalls = (n, balls = []) => {
    if (!n) return balls;

    const color = colors[getRandom(0, colors.length - 1, true)];
    const radius = getRandom(minRadius, maxRadius);
    const position = [getRandom(radius, sceneWidth), getRandom(radius, sceneHeight)]
    const velocity = [getRandom(minVelocity, maxVelocity), getRandom(minVelocity, maxVelocity)];
    const weight = squash(radius, 1.2, 2, minRadius, maxRadius);

    const ball = { color, radius, position, velocity, weight };

    return generateRandomBalls(n - 1, balls.concat(ball));
};

const drawArc = ({ position, radius }) => [...position, radius, 0, 2 * Math.PI];

const drawBalls = (ctx, balls) => {
    balls.forEach(ball => {
        ctx.beginPath();
        ctx.arc(...drawArc(ball));
        ctx.fillStyle = ball.color;
        ctx.fill();
    });
};

const computeNextPositions = (delta, balls) => {
    balls.forEach(ball => {
        ball.velocity = computeSum(ball.velocity, multiply(gravity, delta));
        ball.position = computeSum(ball.position, multiply(ball.velocity, delta));
    });
};

const detectCollisions = balls => {
    balls.forEach(ball => {
        if (ball.position[1] >= sceneHeight - ball.radius) {
            ball.position[1] = sceneHeight - ball.radius
            ball.velocity[1] = -ball.velocity[1] / ball.weight;
            ball.velocity[0] = ball.velocity[0] / ball.weight;
        }

        if (ball.position[1] <= ball.radius) {
            ball.position[1] = ball.radius;
            ball.velocity[1] = -ball.velocity[1] / ball.weight;
        }

        if (ball.position[0] >= sceneWidth - ball.radius) {
            ball.position[0] = sceneWidth - ball.radius;
            ball.velocity[0] = -ball.velocity[0] / ball.weight;
        }

        if (ball.position[0] <= ball.radius) {
            ball.position[0] = ball.radius;
            ball.velocity[0] = -ball.velocity[0] / ball.weight;
        }
    });
};

const connectBalls = (ctx, lineColor, balls) => {
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.moveTo(balls[0].position[0], balls[0].position[1]);

    balls.slice(1).forEach(ball => {
        ctx.lineTo(ball.position[0], ball.position[1]);
    });

    ctx.closePath();
    ctx.stroke();
};

const createRender = (ctx, balls, getShowLineState) => {
    const render = lastTimeStamp => timeStamp => {
        requestAnimationFrame(render(timeStamp));

        const delta = timeStamp - lastTimeStamp;
        const connectLines = getShowLineState();

        ctx.clearRect(0, 0, sceneWidth, sceneHeight);
        computeNextPositions(delta / 1000, balls);
        detectCollisions(balls);
        connectLines && connectBalls(ctx, '#19647E', balls);
        drawBalls(ctx, balls);
    };

    return render;
};

const init = () => {
    const balls = generateRandomBalls(40);
    const ctx = initCanvas();
    const getShowLineState = initLineControls();
    const render = createRender(ctx, balls, getShowLineState);

    render(window.performance.now() - 32)(window.performance.now() - 16);
};

init();