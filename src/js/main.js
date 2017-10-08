var Counter = (function () {


    return {
        init: function () {

            var
                self = this,
                mod = document.querySelectorAll('.widget');

            for (var i = 0, len = mod.length; i < len; i++) {
                self.initialCounter(mod[i]);
            }
        },

        initialCounter: function (widget) {

            console.log('Start Counter Module Init');

            var
                counter = widget.querySelector('.counter'),
                progressBar = counter.querySelector('.counter__outer--progress'),
                labels = counter.querySelectorAll('.counter__value'),
                selectedTimeToEvent = counter.getAttribute('end-time'),
                selectedTimeToEventMin = selectedTimeToEvent.split(':')[0],
                selectedTimeToEventSec = selectedTimeToEvent.split(':')[1],
                labelMin = labels[0],
                labelSec = labels[1],
                remainingTime = 0,
                countTime;

            selectedTimeToEventMin = selectedTimeToEventMin > 99 ? 99 : selectedTimeToEventMin;
            selectedTimeToEventSec = selectedTimeToEventSec > 60 ? 60 : selectedTimeToEventSec;

            selectedTimeToEvent = parseInt(selectedTimeToEventMin * 60) + parseInt(selectedTimeToEventSec);
            progressBar.style.transitionDuration = selectedTimeToEvent + 's';

            remainingTime = selectedTimeToEvent;

            countTime = setInterval(function () {
                remainingTime--;

                if (remainingTime === 0) {
                    clearInterval(countTime);
                    counter.className = counter.className.concat(' counter--stop');
                }

                updateCounter(remainingTime);
            }, 1000);

            function updateCounter(remainingTime) {

                var
                    remainMin,
                    remainSec;


                remainMin = parseInt(remainingTime / 60);
                remainSec = remainingTime - (remainMin * 60);

                labelMin.innerText = remainMin;
                labelSec.innerText = remainSec;

                setTimeout(function () {
                    progressBar.className.baseVal = progressBar.className.baseVal.concat(' counter__outer--progress-start');
                }, 4);
            }
        }
    }

})();

Counter.init();

