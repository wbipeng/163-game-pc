(function(){
	var games = {
		$:function(ele){
			return document.querySelectorAll(ele);
		},
		//头部导航banner的js
		"bannerslider":function(){
			//头部导航最外层元素
			var game_list = this.$('.game_list')[0];
			//头部导航点击按钮
			var game_btn = this.$('.game_btn')[0];
			//头部导航的文字
			var game_list_text = this.$('.game_list_text')[0]
			//点击收起按钮
			var game_list_hide = this.$('.banner_game_list_footer img')[0]
			var banner_game_list = this.$('.banner_game_list')[0]
			var needIndex = 0;
			
			
			game_btn.onclick = function(){
				needIndex++;
				if(needIndex%2==1){
					game_list_text.style.display = 'none';
				}
				else{
					game_list_text.style.display = 'block';
				}
				game_list.classList.toggle('game_listActive');
				banner_game_list.classList.toggle('show');
				
			};
			
			game_list_hide.onclick = function(){
				needIndex = 0;
				game_list_text.style.display = 'block';
				game_list.classList.remove('game_listActive');
				banner_game_list.classList.remove('show');
			}
		},
		"bannerNewsTabs":function(){
			var allBannnerNewsLi = this.$('.banner .banner_news .banner_news_games li');
			
			var allShowLi = this.$('.banner_news_images li');
			
			var zIndex = 5;
			
			for(var i = 0;i < allShowLi.length;i++){
				allShowLi[i].style.zIndex = zIndex;
				zIndex--;
			};
			
			for(var i = 0;i < allBannnerNewsLi.length;i++){
				allBannnerNewsLi[i].index = i;
				allBannnerNewsLi[i].onclick = function(){
					for(var i = 0;i < allBannnerNewsLi.length;i++){
						allBannnerNewsLi[i].classList.remove('active');
						allShowLi[i].classList.remove('active');
					};
					this.classList.add('active');
					allShowLi[this.index].classList.add('active');
				};
			}
		},
		"bannerTabs":function(){
			var allli = this.$('.banner_list_one');
			
			var allBtn = this.$('.click_list li');
			var zIndex = 5;
			
			var timer = null;
			
			var index = 0;
			
			var bannerArr = [
				{
					"name_text":"漫威超级战争",
					"title_text":"灭霸卷土重来",
					"bg":"img/bb351359-e561-4e5b-9041-96f42a6fb75d.jpeg"
				},
				{
					"name_text":"网易游戏点卡",
					"title_text":"网易入驻淘宝天猫",
					"bg":"img/17c5610b-b620-4849-84eb-13c30edeec08.jpeg"
				},
				{
					"name_text":"《零号人物》",
					"title_text":"2v4手游对抗抢险",
					"bg":"img/b44514e7-2e31-4567-8e75-2b9ea9583e4e.jpeg"
				},
				{
					"name_text":"宝可梦最新剧场",
					"title_text":"影游联动开启",
					"bg":"img/bca3d7d2-79f8-4ba1-b624-740f15d55718.jpeg"
				},
				{
					"name_text":"哈利波特：魔法",
					"title_text":"全平台正式上线",
					"bg":"img/fb2c2ca9-1c42-46a5-a3a0-538d2058a387.jpeg"
				}
			];
			
			var banner_last_btn = this.$('.banner_last')[0];
			var banner_next_btn = this.$('.banner_next')[0];
			
			banner_next_btn.onmouseenter = function(){
				var next = index + 1;
				if(next == allBtn.length)next = 0;
				this.children[0].children[0].style.backgroundImage = 'url('+bannerArr[next].bg+')';
				this.children[0].children[1].innerHTML = bannerArr[next].name_text;
				this.children[0].children[2].innerHTML = bannerArr[next].title_text;
			}
			
			banner_last_btn.onclick = function(){
				index--;
				if(index==-1)index =allBtn.length-1;
				for(var i = 0;i < allBtn.length;i++){
					allBtn[i].classList.remove('active');
					allli[i].classList.remove('active');
				};
				allBtn[index].classList.add('active');
				allli[index].classList.add('active');
				
				banner_last_btn.onmouseenter();
				startTabs();
			}
			
			banner_next_btn.onclick = function(){
				index++;
				if(index==allBtn.length)index =0;
				for(var i = 0;i < allBtn.length;i++){
					allBtn[i].classList.remove('active');
					allli[i].classList.remove('active');
				};
				allBtn[index].classList.add('active');
				allli[index].classList.add('active');
				
				banner_next_btn.onmouseenter();
				startTabs();
			}
			
			banner_last_btn.onmouseenter = function(){
				var last = index - 1;
				if(last == -1)last = allBtn.length-1;
				this.children[0].children[0].style.backgroundImage = 'url('+bannerArr[last].bg+')';
				this.children[0].children[1].innerHTML = bannerArr[last].name_text;
				this.children[0].children[2].innerHTML = bannerArr[last].title_text;
			}
			
			for(var i = 0;i < allli.length;i++){
				allli[i].style.zIndex = zIndex;
				zIndex--;
			};
			
			for(var i =0;i < allBtn.length;i++){
				allBtn[i].index = i;
				allBtn[i].onclick = function(){
					for(var i = 0;i < allBtn.length;i++){
						allBtn[i].classList.remove('active');
						allli[i].classList.remove('active');
					};
					this.classList.add('active');
					allli[this.index].classList.add('active');
					index = this.index;
					startTabs();
				}
			};
			startTabs();
			function startTabs(){
				clearInterval(timer);
				timer = setInterval(function(){
					index++;
					if(index == allli.length)index = 0;
					for(var i = 0;i < allBtn.length;i++){
						allBtn[i].classList.remove('active');
						allli[i].classList.remove('active');
					};
					allBtn[index].classList.add('active');
					allli[index].classList.add('active');
				},5000)
			}
		},
		"adAssociation":function(){
			//需要进行移动的ul
			var needUl = this.$('.group_content_node .group_content_node_left .group_content_node_left_center .group_content_node_left_center_ul')[0];
			needUl.innerHTML += needUl.innerHTML 
			//需要进行触碰效果的li
			var allLi = this.$('.group_content_node .group_content_node_left .group_content_node_left_center .group_content_node_left_center_ul > li >ol >li');
			
			var group_content_node_left = this.$('.group_content_node_left')[0];
			
			//左侧的按钮
			var leftBtn = this.$('.group_content_node_left_last')[0];
			//右侧的按钮
			var rightBtn = this.$('.group_content_node_left_next')[0]
			//特殊宽度
			var needSwidth = 162;
			
			var index = 0;
			var leftWidth = needUl.children[0].offsetWidth;
			var b = true;
			
			var timer = null;
			
			
			
			needUl.style.width  = needUl.children[0].offsetWidth * needUl.children.length + 'px';
			
		
			rightBtn.onclick = function(){
				if(!b)return;
				b = false;
				index--;
				if(index==-3){
					needUl.style.left = ((index+1) * leftWidth)-needSwidth + 'px';
				}
				else if(index==-4){
					needUl.style.left = ((index+1) * leftWidth)-needSwidth + 'px';
					index = 0;
					setTimeout(function(){
						needUl.style.transition = '0s';
						setTimeout(function(){
							needUl.style.left = 0;
							setTimeout(function(){
								needUl.style.transition = '1s';
							},100);
						},10);
					},1010);
				}
				else{
					needUl.style.left = index * leftWidth + 'px';
				};
				
				setTimeout(function(){
					b = true;
				},1200);
				for(var i = 0; i < allLi.length;i++){
					allLi[i].classList.remove('active');
				}
				
				
			};
			leftBtn.onclick = function(){
				if(!b)return;
				b = false;
				if(index== 0 ){
					needUl.style.transition = '0s';
					needUl.style.left = (-3 * leftWidth)-needSwidth + 'px';
					setTimeout(function(){
						needUl.style.transition = '1s';
						index = -2;
						needUl.style.left = index * leftWidth + 'px';
						
					},100);
				}
				else{
					if(index == -3){
						index=-1;
					}
					else{
						index++;
					}
					needUl.style.left = index * leftWidth + 'px';
				}
				setTimeout(function(){
					b = true;
				},1200);
				for(var i = 0; i < allLi.length;i++){
					allLi[i].classList.remove('active');
				}
				
			};
			
			clearInterval(timer)
			timer = setInterval(rightBtn.onclick,5000);
			
			group_content_node_left.onmouseenter = function(){
				clearInterval(timer)
			};
			
			group_content_node_left.onmouseleave = function(){
				clearInterval(timer)
				timer = setInterval(rightBtn.onclick,5000);
			};
			
			for(var i = 0;i < allLi.length;i++){
				allLi[i].onmouseenter = function(){
					for(var i = 0; i < allLi.length;i++){
						allLi[i].classList.remove('active');
					}
					this.classList.add('active');
				};
			}
		},
		"hotGamesChange":function(){
			var turnAround = this.$('.turnAround')[0];
			
			var allLi = this.$('.games .hotgames .listGames .listGames_li');
			var bl = false;
			var index = 6;
			
			var changeArr = [
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"决战平安京",
					"image":"img/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg",
					"name":"《决战！平安京》",
					"showTitle":"返校·稚语。剪刀石头布——我~出~锤！"
				}
			]
			
			turnAround.onclick = function(){
				if(bl)return;
				bl = true;
				setTimeout(function(){
						bl = false;
				},1050)
				
				for(var i = 0;i < allLi.length;i++){
					(function(i){
						setTimeout(function(){
							allLi[i].classList.add('scale');
							setTimeout(function(){
								if(index == changeArr.length)index = 0;
								allLi[i].children[1].src = changeArr[index].image;
								allLi[i].children[2].innerText = changeArr[index].name;
								allLi[i].children[3].innerText = changeArr[index].showTitle;
								allLi[i].children[0].children[1].children[0].innerText = changeArr[index].title;
								index++;
								allLi[i].classList.remove('scale');
							},500);
						},i*100)
					})(i)
				}
			};
		},
		"gameLinksSlider":function(){
			var linksBntn =this.$('.hide_box .hide_box_center .hide_show_button')[0];
	
			var treeGames =this.$('.treeGames')[0];
	
			linksBtn.onclick=function(){
				if(this.innerText == '查看更多'){
					this.innerText ='收起';
					treeGames.classList.add('active');
				} 
				else {
					this.innerText = '查看更多';
				}
			};
	
			linksBtn.onmousedown = function(){
				return fasle;
			};
		}
	}
	
	games.bannerslider();
	
	games.bannerTabs();
	
	games.bannerNewsTabs();
	
	games.adAssociation();
	
	//热门游戏的换一换功能
	games.hotGamesChange();
})();