var Counter={init:function(){for(var t=this,e=document.querySelectorAll(".widget"),n=0,r=e.length;n<r;n++)t.initialCounter(e[n])},initialCounter:function(t){function e(t){var e,n;n=t-60*(e=parseInt(t/60)),u.innerText=e,c.innerText=n,m||setTimeout(function(){o.className.baseVal=o.className.baseVal.concat(" counter__outer--progress-start")},4),m=!0}console.log("Start Counter Module Init");var n,r=t.querySelector(".counter"),o=r.querySelector(".counter__outer--progress"),a=r.querySelectorAll(".counter__value"),i=r.getAttribute("end-time"),s=i.split(":")[0],l=i.split(":")[1],u=a[0],c=a[1],p=0,m=!1;s=s>99?99:s,l=l>60?60:l,i=parseInt(60*s)+parseInt(l),o.style.transitionDuration=i+"s",p=i,n=setInterval(function(){0===--p&&(clearInterval(n),r.className=r.className.concat(" counter--stop")),e(p)},1e3)}};Counter.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiQ291bnRlciIsImluaXQiLCJzZWxmIiwidGhpcyIsIm1vZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJpbml0aWFsQ291bnRlciIsIndpZGdldCIsInVwZGF0ZUNvdW50ZXIiLCJyZW1haW5pbmdUaW1lIiwicmVtYWluTWluIiwicmVtYWluU2VjIiwicGFyc2VJbnQiLCJsYWJlbE1pbiIsImlubmVyVGV4dCIsImxhYmVsU2VjIiwiaWZBbmltYXRpb25XYXNTdGFydGVkIiwic2V0VGltZW91dCIsInByb2dyZXNzQmFyIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudFRpbWUiLCJjb3VudGVyIiwicXVlcnlTZWxlY3RvciIsImxhYmVscyIsInNlbGVjdGVkVGltZVRvRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RlZFRpbWVUb0V2ZW50TWluIiwic3BsaXQiLCJzZWxlY3RlZFRpbWVUb0V2ZW50U2VjIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLFNBSUFDLEtBQUEsV0FNQSxJQUFBLElBSEFDLEVBQUFDLEtBQ0FDLEVBQUFDLFNBQUFDLGlCQUFBLFdBRUFDLEVBQUEsRUFBQUMsRUFBQUosRUFBQUssT0FBQUYsRUFBQUMsRUFBQUQsSUFDQUwsRUFBQVEsZUFBQU4sRUFBQUcsS0FJQUcsZUFBQSxTQUFBQyxHQW9DQSxTQUFBQyxFQUFBQyxHQUVBLElBQ0FDLEVBQ0FDLEVBSUFBLEVBQUFGLEVBQUEsSUFEQUMsRUFBQUUsU0FBQUgsRUFBQSxLQUdBSSxFQUFBQyxVQUFBSixFQUNBSyxFQUFBRCxVQUFBSCxFQUVBSyxHQUNBQyxXQUFBLFdBQ0FDLEVBQUFDLFVBQUFDLFFBQUFGLEVBQUFDLFVBQUFDLFFBQUFDLE9BQUEsb0NBQ0EsR0FHQUwsR0FBQSxFQXJEQU0sUUFBQUMsSUFBQSw2QkFFQSxJQVdBQyxFQVZBQyxFQUFBbEIsRUFBQW1CLGNBQUEsWUFDQVIsRUFBQU8sRUFBQUMsY0FBQSw2QkFDQUMsRUFBQUYsRUFBQXZCLGlCQUFBLG1CQUNBMEIsRUFBQUgsRUFBQUksYUFBQSxZQUNBQyxFQUFBRixFQUFBRyxNQUFBLEtBQUEsR0FDQUMsRUFBQUosRUFBQUcsTUFBQSxLQUFBLEdBQ0FsQixFQUFBYyxFQUFBLEdBQ0FaLEVBQUFZLEVBQUEsR0FDQWxCLEVBQUEsRUFDQU8sR0FBQSxFQUdBYyxFQUFBQSxFQUFBLEdBQUEsR0FBQUEsRUFDQUUsRUFBQUEsRUFBQSxHQUFBLEdBQUFBLEVBRUFKLEVBQUFoQixTQUFBLEdBQUFrQixHQUFBbEIsU0FBQW9CLEdBQ0FkLEVBQUFlLE1BQUFDLG1CQUFBTixFQUFBLElBRUFuQixFQUFBbUIsRUFFQUosRUFBQVcsWUFBQSxXQUdBLE1BRkExQixJQUdBMkIsY0FBQVosR0FDQUMsRUFBQU4sVUFBQU0sRUFBQU4sVUFBQUUsT0FBQSxtQkFHQWIsRUFBQUMsSUFDQSxPQTRCQWIsUUFBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvdW50ZXIgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhclxyXG4gICAgICAgICAgICAgICAgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBtb2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lkZ2V0Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbW9kLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluaXRpYWxDb3VudGVyKG1vZFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0aWFsQ291bnRlcjogZnVuY3Rpb24gKHdpZGdldCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IENvdW50ZXIgTW9kdWxlIEluaXQnKTtcclxuXHJcbiAgICAgICAgICAgIHZhclxyXG4gICAgICAgICAgICAgICAgY291bnRlciA9IHdpZGdldC5xdWVyeVNlbGVjdG9yKCcuY291bnRlcicpLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX19vdXRlci0tcHJvZ3Jlc3MnKSxcclxuICAgICAgICAgICAgICAgIGxhYmVscyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50ZXJfX3ZhbHVlJyksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWVUb0V2ZW50ID0gY291bnRlci5nZXRBdHRyaWJ1dGUoJ2VuZC10aW1lJyksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWVUb0V2ZW50TWluID0gc2VsZWN0ZWRUaW1lVG9FdmVudC5zcGxpdCgnOicpWzBdLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lVG9FdmVudFNlYyA9IHNlbGVjdGVkVGltZVRvRXZlbnQuc3BsaXQoJzonKVsxXSxcclxuICAgICAgICAgICAgICAgIGxhYmVsTWluID0gbGFiZWxzWzBdLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxTZWMgPSBsYWJlbHNbMV0sXHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmdUaW1lID0gMCxcclxuICAgICAgICAgICAgICAgIGlmQW5pbWF0aW9uV2FzU3RhcnRlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY291bnRUaW1lO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRUaW1lVG9FdmVudE1pbiA9IHNlbGVjdGVkVGltZVRvRXZlbnRNaW4gPiA5OSA/IDk5IDogc2VsZWN0ZWRUaW1lVG9FdmVudE1pbjtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUaW1lVG9FdmVudFNlYyA9IHNlbGVjdGVkVGltZVRvRXZlbnRTZWMgPiA2MCA/IDYwIDogc2VsZWN0ZWRUaW1lVG9FdmVudFNlYztcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGltZVRvRXZlbnQgPSBwYXJzZUludChzZWxlY3RlZFRpbWVUb0V2ZW50TWluICogNjApICsgcGFyc2VJbnQoc2VsZWN0ZWRUaW1lVG9FdmVudFNlYyk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHNlbGVjdGVkVGltZVRvRXZlbnQgKyAncyc7XHJcblxyXG4gICAgICAgICAgICByZW1haW5pbmdUaW1lID0gc2VsZWN0ZWRUaW1lVG9FdmVudDtcclxuXHJcbiAgICAgICAgICAgIGNvdW50VGltZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1RpbWUtLTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nVGltZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyLmNsYXNzTmFtZSA9IGNvdW50ZXIuY2xhc3NOYW1lLmNvbmNhdCgnIGNvdW50ZXItLXN0b3AnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVDb3VudGVyKHJlbWFpbmluZ1RpbWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIocmVtYWluaW5nVGltZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhclxyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbk1pbixcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5TZWM7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlbWFpbk1pbiA9IHBhcnNlSW50KHJlbWFpbmluZ1RpbWUgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICByZW1haW5TZWMgPSByZW1haW5pbmdUaW1lIC0gKHJlbWFpbk1pbiAqIDYwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbE1pbi5pbm5lclRleHQgPSByZW1haW5NaW47XHJcbiAgICAgICAgICAgICAgICBsYWJlbFNlYy5pbm5lclRleHQgPSByZW1haW5TZWM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWlmQW5pbWF0aW9uV2FzU3RhcnRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZS5iYXNlVmFsID0gcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lLmJhc2VWYWwuY29uY2F0KCcgY291bnRlcl9fb3V0ZXItLXByb2dyZXNzLXN0YXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWZBbmltYXRpb25XYXNTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5Db3VudGVyLmluaXQoKTtcclxuXHJcbiJdfQ==
