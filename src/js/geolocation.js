const mod = {};
mod.core = () => {
  const each = (arr, fn) => {
    let i = 0, l = arr.length;
    for (i; i < l; i++) {
      fn(i, arr[i]);
    }
  };

  const addJS = (src, cfg = {id: false, cb: false}) => {
    if (cfg.id && document.body.getElementsByClassName(cfg.id)[0]) return cfg.cb();
    let el;

    el = document.createElement('script');
    cfg.id && el.classList.add(cfg.id);
    el.async = false;
    el.src = src;

    document.body.appendChild(el);
    cfg.cb && el.addEventListener('load', cfg.cb, false);
  };

  const phones = document.body.querySelectorAll('[data-phones]');
  let continent, phone_numbers;

  if (!phones.length) return;
  // create array with phone numbers
  phone_numbers = phones[0].dataset.phones.split(',');

  const setNumbers = (el, key) => {
    el.href = `tel:${phone_numbers[key].split(' ').join('-')}`;
    el.innerHTML = el.dataset.strong === '1' ? `<strong>${phone_numbers[key]}</strong>` : `${phone_numbers[key]}`;
  }

  // set as default EU phone if GeoLoc is blocked by browser
  /*each(phones, (key, val) => {
    setNumbers(val, 0);
  });*/

  addJS('https://geoip-js.com/js/apis/geoip2/v2.1/geoip2.js', {
    cb: () => {
      // GeoLoc callback fnc
      const updatePhones = (function () {
        const updateResponse = function (geoipResponse) {
          continent = geoipResponse.continent.code;

          // update all phones by continent code
          each(phones, (key, val) => {
            switch (continent) {
              case 'EU':
                setNumbers(val, 0);
                break;
              default:
                setNumbers(val, 1);
            }
          })
        };

        const onSuccess = function (geoipResponse) {
          updateResponse(geoipResponse);
        };

        // If we get an error, we will display an error message
        const onError = function (error) {
          console.error('an error!  Please try again..');
        };

        return () => {
          if (typeof geoip2 !== 'undefined') {
            geoip2.city(onSuccess, onError);
          } else {
            console.warn('a browser that blocks GeoIP2 requests');
          }
        };
      }());
      updatePhones();
    }
  });
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', mod.core) : mod.core();
