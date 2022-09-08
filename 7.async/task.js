class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id == undefined) {
			throw new Errow('не определён id будильника')
		};

		if (this.alarmCollection.some((item) => item.id == id) == true) {
			console.error('Будильник с таким id уже существует');
			return
		};

		this.alarmCollection.push({time, callback, id})
	}

	removeClock(id) {
		let delPos = this.alarmCollection.findIndex((item, i, arr) => arr[i].id == id);
		if (delPos == -1) {
			return false
		} else {
			this.alarmCollection.splice(delPos, 1);
			return true;
		}
	}

	getCurrentFormattedTime() {
		return(new Date().toLocaleTimeString("ru-Ru", {
  		hour: "2-digit",
  		minute: "2-digit",
		}))
		
	}

	start() {
		let checkClock = (bell) => {
			if(this.getCurrentFormattedTime() == bell.time) {
				bell.callback();
			};
		}
		if (this.timerId == null) {
			this.timerId = setInterval(()=> {
				this.alarmCollection.forEach(function(item, i, arr){
					checkClock(bell);
				})
			}, 1000)
		}
	}

	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(function(item, i, arr){
			console.log(item.id + ' - ' + item.time)
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection.splice(0)
	}
};


function testCase() {
	let clock = new AlarmClock();
	clock.addClock("23:10", ()=> console.log("Подъём"), 1);
	clock.addClock("23:11", ()=> {
		console.log("Вставай быстро");
		clock.removeClock(2)
		}, 2);
	clock.addClock("23:12", ()=> {
		console.log("Проспал");
		clock.clearAlarms();
		clock.printAlarms()
		}, 3);

	clock.printAlarms();

	clock.start()
};

testCase()