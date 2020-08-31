// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

    let rocket = document.getElementById('rocket');
    let rocketUp = parseInt(rocket.style.bottom);

    takeoff.addEventListener('click', function() {
       let response =  window.confirm('Confirm that the shuttle is ready for takeoff.');
       if (response) {
           flightStatus.innerHTML = 'Shuttle in flight.';
           shuttleBackground.style.background = 'blue';
        //    rocket.style.bottom = '10px';
        document.getElementById('spaceShuttleHeight').innerHTML = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) + 10000;
       };
    });

    landing.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.background = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
        rocket.style.bottom = 0;
    });

    missionAbort.addEventListener('click', function() {
        let abortResponse = window.confirm('Confirm that you want to abort the mission.');
        if (abortResponse) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.background = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
            rocket.style.bottom = 0;
        };
    });

 

    upButton.addEventListener('click', function() {
        let rocketUp = parseInt(rocket.style.bottom);
        if (rocketUp < 250) {
            rocket.style.bottom = rocketUp + 10 + 'px';
            document.getElementById('spaceShuttleHeight').innerHTML = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) + 10000;
        }
    });

    downButton.addEventListener('click', function() {
        let rocketDown = parseInt(rocket.style.bottom);
        if (rocketDown > 0) {
            rocket.style.bottom = rocketDown - 10 + 'px';
            document.getElementById('spaceShuttleHeight').innerHTML = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) - 10000;
        }
        
    });

    leftButton.addEventListener('click', function() {
        let rocketLeft = parseInt(rocket.style.left)
        if (rocketLeft >= 0) {
            rocket.style.left = rocketLeft - 10 + 'px';
        }
    });

    rightButton.addEventListener('click', function() {
        let rocketRight = parseInt(rocket.style.left);
        if (rocketRight <= 320) {
            rocket.style.left = rocketRight + 10 + 'px';
        }
    });
})