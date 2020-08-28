// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    console.log('loaded');

    // typeof(document.getElementById('spaceShuttleHeight').innerHTML) = Number;

    takeoff.addEventListener('click', function() {
       let response =  window.confirm('Confirm that the shuttle is ready for takeoff.');
       if (response) {
           flightStatus.innerHTML = 'Shuttle in flight.';
           shuttleBackground.style.background = 'blue';
           document.getElementById('spaceShuttleHeight').innerHTML += '10000';
       };
    });

    landing.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.background = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    });

    missionAbort.addEventListener('click', function() {
        let abortResponse = window.confirm('Confirm that you want to abort the mission.');
        if (abortResponse) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.background = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        };
    });

let rocket = document.getElementById('rocket');


    upButton.addEventListener('click', function() {
        rocket.style.top += '10px';
    })
})