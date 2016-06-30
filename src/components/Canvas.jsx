import React, { Component } from 'react';

class Color {
	static get colors() {
		return ['#C47AC0', '#2F323Al', '#41393E', '#C7E8F3', '#EB5E28', '#4A5899', '#559CAD', '#7CAE7A', '#A72608', '#F0F2A6', '#1A1B25', '#CE0357', '#A507D7', '#61C9A8', '#ED9B40', '#0B3142'];
	}
}

class Scene {
	static get WIDTH () {
		return window.innerWidth;
	}

	static get HEIGHT () {
		return window.innerHeight;
	}
}

class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static dot(vec, s) {
		return new Vector2(vec.x * s, vec.y * s);
	}

	static sum(vec1, vec2) {
		return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
	}

	static distance(vec1, vec2) {
		return Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
	}
}

class Utils {
	static computeDelta() {
		let now = Date.now();
		Utils.delta = (now - (Utils._last || now - 16))/1000;
		Utils._last = now;
	}

	static get GRAVITY() {
		return new Vector2(0, 1900);
	}

	static random(min, max, int) {
		let ret = Math.random() * (max - min) + min;
		return int ? Math.round(ret) : ret;
	}

	static detectCollisions(objects) {
		objects.forEach(obj => {
			if (obj.position.y >= Scene.HEIGHT - obj.radius) {
				obj.position.y = Scene.HEIGHT - obj.radius
				obj.velocity.y = -obj.velocity.y/obj.weight;
				obj.velocity.x = obj.velocity.x/obj.weight;
			}

			if (obj.position.y <= obj.radius) {
				obj.position.y = obj.radius;
				obj.velocity.y = -obj.velocity.y/obj.weight;
			}

			if (obj.position.x >= Scene.WIDTH - obj.radius) {
				obj.position.x = Scene.WIDTH - obj.radius;
				obj.velocity.x = -obj.velocity.x/obj.weight;	
			}

			if (obj.position.x <= obj.radius) {
				obj.position.x = obj.radius;
				obj.velocity.x = -obj.velocity.x/obj.weight;	
			}
		});
	}

	static computeNextPositions(objects) {
		objects.forEach(obj => {
			obj.velocity = Vector2.sum(obj.velocity, Vector2.dot(Utils.GRAVITY, Utils.delta));
			obj.position = Vector2.sum(obj.position, Vector2.dot(obj.velocity, Utils.delta));
		});
	}

	static squash(x, min, max, rangeMin, rangeMax) {
		return min + (x - rangeMin) * (max-min)/(rangeMax - rangeMin);
	}
}

class Ball {
	constructor(positionX, positionY, radius, velocityX, velocityY, color, weight = 1.5) {
		this.position = new Vector2(positionX, positionY);
		this.velocity = new Vector2(velocityX, velocityY);
		this.radius = radius;
		this.weight = weight;
		this.color = color;
	}

	canvasArc() {
		return [this.position.x, this.position.y, this.radius, 0, 2 * Math.PI];
	}

	static drawBalls(ctx, balls) {
		balls.forEach(ball => {
			ctx.beginPath();
			ctx.arc(...ball.canvasArc());
			ctx.fillStyle = ball.color;
			ctx.fill();
		});
	}

	static getRandomBalls(count) {
		let balls = [];
		const minRadius = 10, maxRadius = Scene.WIDTH < 700 ? 30 : 50;

		while(count) {
			let radius = Utils.random(minRadius, maxRadius, true);
			let positionX = Utils.random(radius, Scene.WIDTH);
			let positionY = Utils.random(radius, Scene.HEIGHT);

			let velocityX = Utils.random(-3000, 3000);
			let velocityY = Utils.random(-3000, 3000);

			let idx = Utils.random(0, Color.colors.length - 1, true);
			let color = Color.colors[idx];

			let weight = Utils.squash(radius, 1.2, 2, minRadius, maxRadius);

			balls.push(new Ball(positionX, positionY, radius, velocityX, velocityY, color, weight));

			count--;
		}

		return balls;
	}
}

class Line {
	static connectBalls(ctx, lineColor, balls) {
		ctx.beginPath();
		ctx.strokeStyle = lineColor;
		ctx.moveTo(balls[0].position.x, balls[0].position.y);

		balls.slice(1).forEach(ball => {
			ctx.lineTo(ball.position.x, ball.position.y);
		});

		ctx.closePath();
		ctx.stroke();
	}
}

class Interaction {
	static detectDraggingBall(mousePosition, balls) {
		this.draggingBall = balls.filter(b => {
			return Vector2.distance(mousePosition, b.position) < b.radius;
		}).slice(-1)[0];
	}

	static handleDragging(mousePosition) {
		if (this.draggingBall) this.draggingBall.position = mousePosition;
	}
}

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.bindEvents();
		setTimeout(this.draw, 1000);
	}

	componentWillUpdate() {
		setTimeout(this.draw, 1000);
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.frameId);
	}

	bindEvents() {
		this.canvas.addEventListener('mousedown', (e) => {
			this.dragging = true;
			Interaction.detectDraggingBall(this.mousePosition, this.balls);
		});
		this.canvas.addEventListener('mousemove', (e) => {
			this.mousePosition = new Vector2(e.clientX, e.clientY);
		});
		this.canvas.addEventListener('mouseup', (e) => {
			this.dragging = false;
			Interaction.draggingBall = null;
		});
	}

	draw() {
		Utils._last = 0;
		this.balls = Ball.getRandomBalls(Scene.WIDTH < 700 ? 30 : 50);

		render.call(this);

		function render() {
			Utils.computeDelta();
			Utils.computeNextPositions(this.balls);

			this.dragging && Interaction.handleDragging(this.mousePosition);

			this.frameId = window.requestAnimationFrame(render.bind(this));
			this.ctx.clearRect(0, 0, Scene.WIDTH, Scene.HEIGHT);

			Line.connectBalls(this.ctx, '#19647E', this.balls);
			Ball.drawBalls(this.ctx, this.balls);
			Utils.detectCollisions(this.balls);
		}
	}

	render() {
		return (
			<div>
				<canvas 
					width={Scene.WIDTH}
					height={Scene.HEIGHT}
					ref={(c) => {
						this.canvas = c;
						if (!this.ctx)
							this.ctx = c.getContext('2d');
					}}>
				</canvas>		
			</div>
		);
	}
}