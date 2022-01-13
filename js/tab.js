let arr = [
		{name:"女孩的钓鱼慢活",jishu:1,src:'./img/1c.webp'},
		{name:"博人传火影忍者",jishu:2,src:'./img/3121473d5dd03a9bcccb8490034207e724e731b3.jpg@70w_70h_1c_100q.webp'},
		{name:"妖怪手表",jishu:3,src:'./img/56b8e4369871fc0c55bfa9df3f3f8002d40f0691.png@70w_70h_1c_100q.webp'},
		{name:"室内足球少年!!!!",jishu:4,src:'./img/590b3d5ef676909b79ae745e1627c57204530e61.png@70w_70h_1c_100q.webp'},
		{name:"男孩遇见女孩",jishu:5,src:'./img/6421e3ac2874de8a845cce4bf7db6e1341d4ac1b.png@70w_70h_1c_100q.webp'},
		{name:"锈色铠甲黎明",jishu:6,src:'./img/840c4179155efa3db0af7f7f3bccf16c2a5b8056.png@70w_70h_1c_100q.webp'},
		{name:"少女前线",jishu:7,src:'./img/8f8e17e213bdb4195d3fd1798beb5bf07b0bb5ce.png@70w_70h_1c_100q.webp'},
		{name:"失格纹的最强贤者～世界最强的贤者",jishu:8,src:'./img/9050b7a5b4d8a584a4db64c16c44646f7264d8a0.png@70w_70h_1c_100q.webp'},
		{name:"现实主义勇者的王国再建记",jishu:9,src:'./img/918dbdcdd8fe70f11f9e04fa542367164f0879f7.png@70w_70h_1c_100q.webp'},
		{name:"国王排名",jishu:10,src:'./img/940314a9af07bde22cb4d767a894ebbddf2714c2.png@70w_70h_1c_100q.webp'},
		{name:"勇者斗恶龙达伊的大冒险",jishu:11,src:'./img/ae36d43ebe7ea7176d18bab794de3d8930284feb.png@70w_70h_1c_100q.webp'},
		{name:"擅长捉弄的高木同学 第三季",jishu:12,src:'./img/b0d1b4e03212c541d9836926a35aa6c22e8317a1.png@70w_70h_1c_100q.webp'},
		{name:"指名!",jishu:13,src:'./img/d15c162d4dd7298a5af72f019e9d93ae87630157.png@70w_70h_1c_100q.webp'}
	]
window.onload = function(){
	addList(0)
}
function changeWeek (e) {
	/*点击替换选项卡样式*/
	const tab = document.getElementById("tab");
	let lia = tab.getElementsByTagName("a");
	for(let i=0;i<lia.length;i++){
		lia[i].removeAttribute("class",'check')
	}
	lia[e].className = 'check'
	addList(e)
}

function addList(num){
	let tabList = document.getElementById("tabList")
	let arr1 = [];
	switch(num){
		case 0:
			for(let i=0;i<arr.length;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 1:
			for(let i=0;i<2;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 2:
			for(let i=2;i<4;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 3:
			for(let i=4;i<6;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 4:
			for(let i=6;i<8;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 5:
			for(let i=8;i<10;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 6:
			for(let i=10;i<12;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
		case 7:
			for(let i=12;i<13;i++){
				let bq =`
				<div class="time_box">
					<div class="time_img">
						<img src="`+arr[i].src+`" alt="">
					</div>
					<div class="time_item">
						<a href="./xqy/xqy.html">`+arr[i].name+`</a>
						<p>更新至`+arr[i].jishu+`话</p>
					</div>
				</div>`;
				arr1.push(bq)
				tabList.innerHTML = arr1.join('');
			}
		break;
	}
	
}