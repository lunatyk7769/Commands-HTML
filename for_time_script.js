     setInterval(function(){

            const _getdate = new Date();
            let _hour = _getdate.getHours();

            const _para_header_time = document.getElementById("for_time_script");

            if((_hour>=0 && _hour <7) || (_hour>=22 && _hour<=24)){
                _para_header_time.innerHTML = "&#127761";
            }
            else if(_hour>=8 && _hour <21){
                _para_header_time.innerHTML = "&#127774";
            }
        


        },100);