window.onload = function() {

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const gestureZone = document.documentElement;
    const btns = document.querySelectorAll("button");
    const keys = ['81', '87', '69', '65', '83', '68'];

    /**
     * Handle swiping event
     */
    function handleGesture() {
        if (touchendX <= touchstartX) {
            console.log('Swiped left');
        }
        
        if (touchendX >= touchstartX) {
            console.log('Swiped right');
            toggleFullScreen();
        }
        
        if (touchendY <= touchstartY) {
            console.log('Swiped up');
        }
        
        if (touchendY >= touchstartY) {
            console.log('Swiped down');
        }
        
        if (touchendY === touchstartY) {
            console.log('Tap');
        }
    }

    /**
     * Toggle full screen
     */
    function toggleFullScreen() {
        var gestureZone = document.documentElement;
        if (!document.fullScreenElement) {
            // document.documentElement.requestFullscreen();
            var rfs = gestureZone.requestFullScreen
                    || gestureZone.webkitRequestFullScreen
                    || gestureZone.mozRequestFullScreen
            ;
            rfs.call(gestureZone);
        } else {
            if (document.exitFullscreen) {
                // document.exitFullscreen(); 
                var  rfs = gestureZone.exisFullscreen
                        || gestureZone.webkitExitFullscreen
                        || gestureZone.mozCancelFullScreen
                ;
                rfs.call(gestureZone);
            }
        }
    }

    function clickBtn(e) {
        if(!keys.includes(e.keyCode.toString())) return;
        // q
        if(e.keyCode === 81) {
            try {
                btns[0].click();
            }
            catch(err) {
                return;
            }
        }
        // w
        if(e.keyCode === 87) {
            try {
                btns[1].click();
            }
            catch(err) {
                return;
            }
        }
        // e
        if(e.keyCode === 69) {
            try {
                btns[2].click();
            }
            catch(err) {
                return;
            }
        }
        // a
        if(e.keyCode === 65) {
            try {
                btns[3].click();
            }
            catch(err) {
                return;
            }
        }
        // s
        if(e.keyCode === 83) {
            try {
                btns[4].click();
            }
            catch(err) {
                return;
            }
        }
        // d
        if(e.keyCode === 68) {
            try {
                btns[5].click();
            }
            catch(err) {
                return;
            }
        }
    }

    document.addEventListener('keydown', clickBtn);
}