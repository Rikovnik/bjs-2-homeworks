class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id == undefined) {
    		throw new Errow('не определён id будильника')
  		};

  		for (const i in this.alarmCollection) {
    		if (this.alarmCollection[i].id == id) {
      			console.error();
      			return}
    	};

    	this.alarmCollection.push({
      		time: time,
      		callback: callback,
      		id: id
  		})
	}

	removeClock(id) {
		this.alarmCollection.filter(function(item, i, arr) {
      		if (arr[i].id == id) {
        		arr.splice(i,1);
        		return true
      		} else {
        		return false;
      		}
    	})

	}

	getCurrentFormattedTime() {
		return((new Date()).getHours() + ':' + (new Date()).getMinutes());

	}

	start() {
		
		function checkClock(bell) {
			if(this.getCurrentFormattedTime() == bell.time) {
				bell.callback();
			};
		};

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


}


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