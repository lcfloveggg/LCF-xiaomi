{
	let types = document.querySelectorAll(".top-wenzi5");
    let concents = document.querySelectorAll(".jiadian-right");
    types.forEach(function (val,index) {
        val.onmouseover = function () {
            for(let i = 0;i < types.length;i++){
                types[i].classList.remove("top-wenzi1");
                concents[i].style.display = "none";
            }
            val.classList.add("top-wenzi1");
            concents[index].style.display = "block";
        }
    });
}

{
	let dians = document.querySelectorAll(".yuan");
	let imgs = document.querySelectorAll(".binnerbox img");
	dians.forEach(function (val,index) {
	    val.onclick = function () {
	        for(let i = 0;i < dians.length;i++){
	            dians[i].classList.remove("active");
	            imgs[i].classList.remove("active");
	        }
	        val.classList.add("active");
	        imgs[index].classList.add("active");
	        now = index;
	    }
	});
	let l = dians.length;
    let now = 0;
    st = setInterval(fn, 2000);

    function fn(jt = "r") {
        if (jt === "r") {
            now++;
            if (now === l) {
                now = 0;
            }
        } else if (jt === "l") {
            now--;
            if (now < 0) {
                now = l - 1;
            }
        }
        for (let i = 0; i < l; i++) {
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[now].classList.add("active");
        imgs[now].classList.add("active");
    }

    let b = document.querySelector(".zhuye");
    b.onmouseover = function () {
        clearInterval(st);
    };
    b.onmouseout = function () {
        st = setInterval(fn, 2000);
    };
    let left = document.querySelector(".zuoyou1");
    let right = document.querySelector(".zuoyou2");
    left.onclick = function () {
        fn("l");
    };
    right.onclick = function () {
        fn();
    };
}

{
	let prev = document.querySelector(".danpin-prev");
	let next = document.querySelector(".danpin-next");
	let rbox = document.querySelector(".danpin-bottom");
	prev.onclick = prevfn;
	function prevfn(){
		prev.classList.remove("active");
		next.classList.add("active");
		rbox.style.marginLeft = "-1245px";
		i=1;
	}
	next.onclick = nextfn;
	function nextfn(){
		prev.classList.add("active");
		next.classList.remove("active");
		rbox.style.marginLeft = "0";
		i=0;
	}
	let i = 0;
	let st = setInterval(fn,4000);
	function fn(){
		i++;
		if(i % 2 === 0){
			nextfn();
		}
		else{
			prevfn();
		}
	}
	let b = document.querySelector(".danpin-rbox");
	b.onmouseover = function (){
	    clearInterval(st);
	};
	b.onmouseout = function(){
	     st = setInterval(fn,4000);
	};
}

{
	let prev = document.querySelector(".tuijian-prev");
	let next = document.querySelector(".tuijian-next");
	let rbox = document.querySelector(".tuijian");
	prev.onclick = prevfn;
	function prevfn(){
		prev.classList.remove("active");
		next.classList.add("active");
		rbox.style.marginLeft = "-1230px";
		i=1;
	};
	next.onclick = nextfn;
	function nextfn(){
		prev.classList.add("active");
		next.classList.remove("active");
		rbox.style.marginLeft = "0";
		i=0;
	};
	let i = 0;
	let st = setInterval(fn,4000);
	function fn(){
		i++;
		if(i % 2 === 0){
			nextfn();
		}
		else{
			prevfn();
		}
	}
	let b = document.querySelector(".tuijian-rbox");
	b.onmouseover = function (){
	    clearInterval(st);
	};
	b.onmouseout = function(){
	     st = setInterval(fn,4000);
	};
}

{
    let nrboxs = document.querySelectorAll("#zhubox");
    for(let i = 0;i < nrboxs.length;i++){
            tabFn(nrboxs[i]);
    }
    function tabFn(ele){
        let types = ele.querySelectorAll(".top-right .top-wenzi");
    	let concents = ele.querySelectorAll("#jiadian2 .jiadian-right");
    	types.forEach(function (val,index) {
        	val.onmouseover = function () {
	            for(let i = 0;i < types.length;i++){
	                types[i].classList.remove("top-wenzi1");
	                concents[i].style.display = "none";
	            }
	            val.classList.add("top-wenzi1");
	            concents[index].style.display = "block";
	        }
	    });
    }
}

{
    let nrboxs = document.querySelectorAll(".neirongbox");
    for(let i = 0;i < nrboxs.length;i++){
            tabFn(nrboxs[i]);
    }
    function tabFn(ele){
        let dians = ele.querySelectorAll(".nrdian");
        let nrbox = ele.querySelector(".neirongxbox");   
        let left = ele.querySelector(".zuo");
        let right = ele.querySelector(".you");
        dians.forEach(function (val,index) {
            val.onclick = function () {
                for (let i = 0; i < dians.length; i++) {
                    dians[i].classList.remove("active");
                }
                val.classList.add("active");
                nrbox.style.marginLeft = -310*index + "px";
                now = index;
            }
        });
        let now = 0;
        left.onclick = function () {
             jtFn(jt = "l");
        };
        right.onclick = function () {
             jtFn();
        };
        function jtFn(jt = "r"){
            if (jt === "r") {
                now++;
                if (now === dians.length) {
                    now = dians.length-1;
                }
            } else if (jt === "l") {
                now--;
                if (now < 0) {
                    now = 0;
                }
            }
            for (let i = 0; i < dians.length; i++) {
                    dians[i].classList.remove("active");
                }
                dians[now].classList.add("active");
                nrbox.style.marginLeft = -310*now + "px";
        }
    }
}