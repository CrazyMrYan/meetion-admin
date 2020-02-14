class watchert{
    constructor(opts){
        this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {};
        this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {};
        for(let key in opts.data){
            this.setData(key)
        }
    }
 
    getBaseType(target) {
        const typeStr = Object.prototype.toString.apply(target);
     
        return typeStr.slice(8, -1);
    }
 
    setData(_key){
        Object.defineProperty(this,_key,{
            get: function () {
                return this.$data[_key];
            },
            set : function (val) {
                const oldVal = this.$data[_key];
                if(oldVal === val)return val;
                this.$data[_key] = val;
                this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
                    this.$watch[_key].call(this,val,oldVal)
                );
                return val;
            },
        });
    }
}
var tags = [];
if(this.router){
	
	$('#app').append(`<ul style="height:${ document.body.clientWidth}px" class="M_nav">
		</ul>`)

	$('#app').append(`<div style="height:${window.screen.height-145}px" class="htmlbox"></div>`)
	for(let z =0 ;z <router.length;z++){
		$('#app>ul').append(`<li><a style="min-width: 50px;text-align: left;" MAhref="${router[z].path}"> <i style="min-width: 50px;text-align: center;" class="${router[z].icon}"></i>
		 ${router[z].name}</a></li>`);
		
		let children = router[z].children
			$('#app>.htmlbox').append(`<iframe src="${router[z].path}" frameborder="0"  scrolling="No" leftmargin="0"
			topmargin="0"></iframe>`);

	}
	$('#app>.htmlbox>iframe:eq(0)').css("display","block");
	$(`.M_nav>li>a:eq(0)`).css('color','#2d8cf0');
	$(`.M_nav>li>a:eq(0)`).css('background','#000c17');
	tags.push({"path":router[0].path,"name":router[0].name});
	var a = router[0].path.replace(/.html/g, "");
	window.location.href = "#/"+a;
	
}

var M_navList = $('.M_nav');

for(let z= 0; z<M_navList.length;z++){
	M_navListF(z);
}
function M_navListF (z){
	$(`.M_nav:eq(${z})>li>a`).click(function(e){
		var href = e.target.getAttribute("MAhref");
		var name = e.target.innerText;
		var a = href.replace(/.html/g, "");
		window.location.href = "#/"+a;
		getblock(href);
		for(let z = 0 ; z <tags.length;z++){
			var name = name.trim();
			var pname = tags[z].name.trim();
			pFn(name,pname,href);
			return
		}
	})
}
function pFn(name,pname,href){
	name.trim();
	pname.trim();
	
	if(name == pname ){
		return
	}else{
		tags.push({"path":href,"name":name});
	   
	   let obj = {};
	   let peon = tags.reduce((cur,next) => {
		   obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
		   return cur;
	   },[]) 
	   tag.a = peon;
	}
}


let tag = new watchert({
	data: {
		a: tags,
	},
	watch: {
		a(newVal, oldVal) {
			if(newVal.length == 0){
				$('#app>.tagsbox').remove()
			}
			$('.tagsbox').empty()
			$('#app > .htmlbox').css('margin-top','60px')
			for(let z  =0 ; z<newVal.length;z++){
				$('.tagsbox').append(`<span class="M_Tag M_Tag_D" style="margin: 12px 0 0 10px;font-size:14px;" link="${newVal[z].path}">${newVal[z].name}</span>`)
			}
			let M_Tag_D = $('.M_Tag_D');
			for(let z = 0 ; z<M_Tag_D.length;z++){
				M_Tag_DF(z);
			}
			function M_Tag_DF(z){
				$('.M_Tag_D:eq('+z+')').append(`<i style="position: relative;width: 20px;font-size:10px; text-align: right;" class="fa fa-close M_Tag_DF"></i>`)
				$('.M_Tag_D:eq('+z+')>i').click(function(){
					$('.M_Tag_D:eq('+z+')').css('display','none')
				})
				$('.M_Tag_D:eq('+z+')').click(function(e){
				var ahref = $('.M_Tag_D:eq('+z+')').attr("link")
					var ifarr = $('#app>.htmlbox>iframe');
					for(let z =0 ; z<ifarr.length;z++){
						if($(`.htmlbox>iframe:eq(${z})`).attr('src') == ahref){
							$(`.htmlbox>iframe:eq(${z})`).css('display','block');
							$(`.M_nav>li>a:eq(${z})`).css('color','#2d8cf0');
							$(`.M_nav>li>a:eq(${z})`).css('background','#000c17');
							var a = ahref.replace(/.html/g, "")
							window.location.href = "#/"+a;
						}else{
							$(`.htmlbox>iframe:eq(${z})`).css('display','none');
							$(`.M_nav>li>a:eq(${z})`).css('color','#fff');
							$(`.M_nav>li>a:eq(${z})`).css('background','#001529');
						}
				
					}
				})
			}
		}
	}
})
function tagsbox(newVal){
	$('.tagsbox').empty()
	for(let z  =0 ; z<newVal.length;z++){
		$('.tagsbox').append(`<div>${z}</div>`)
	}
}	
function getblock(ahref){
	var ifarr = $('#app>.htmlbox>iframe');
	for(let z =0 ; z<ifarr.length;z++){
		if($(`.htmlbox>iframe:eq(${z})`).attr('src') == ahref){
			$(`.htmlbox>iframe:eq(${z})`).css('display','block');
			$(`.M_nav>li>a:eq(${z})`).css('color','#2d8cf0');
			$(`.M_nav>li>a:eq(${z})`).css('background','#000c17');
		}else{
			$(`.htmlbox>iframe:eq(${z})`).css('display','none');
			$(`.M_nav>li>a:eq(${z})`).css('color','#fff');
			$(`.M_nav>li>a:eq(${z})`).css('background','#001529');
		}

	}
}

let M_Ipt_Show = $('.M_Ipt_Show');
for (let z = 0; z < M_Ipt_Show.length; z++) {
	M_Ipt_ShowF(z)
}

function M_Ipt_ShowF(z) {
	$('.M_Ipt_Show:eq(' + z + ')').after(`<span class="M_Ipt_Show_a"><i class="fa fa-eye"style="color:#666"></i></span>`);
	let M_Ipt_Show_Index = 0;
	$('.M_Ipt_Show_a:eq(' + z + ')').click(function () {
		if (M_Ipt_Show_Index == 0) {
			$('.M_Ipt_Show_a:eq(' + z + ')>i').removeClass('fa-eye');
			$('.M_Ipt_Show_a:eq(' + z + ')>i').addClass('fa-eye-slash');
			$('.M_Ipt_Show:eq(' + z + ')').attr('type', 'text');
			M_Ipt_Show_Index = 1
		} else if (M_Ipt_Show_Index == 1) {
			$('.M_Ipt_Show_a:eq(' + z + ')>i').removeClass('fa-eye-slash');
			$('.M_Ipt_Show_a:eq(' + z + ')>i').addClass('fa-eye');
			$('.M_Ipt_Show:eq(' + z + ')').attr('type', 'password');
			M_Ipt_Show_Index = 0
		}
	})
}
let M_ipt_D = $('.M_ipt_D');
for (let z = 0; z < M_ipt_D.length; z++) {
	M_ipt_DF(z)
}

function M_ipt_DF(z) {
	$('.M_ipt_D:eq(' + z + ')').after(`<span class="M_Ipt_Delete"><i class="fa fa-close"style="color:#666"></i></span>`);
	$('.M_Ipt_Delete:eq(' + z + ')').click(function () {
		$('.M_ipt_D:eq(' + z + ')').val('')
	})
}
let M_Dialogue_C = $('.M_Dialogue_C');
for (let z = 0; z < M_Dialogue_C.length; z++) {
	M_Dialogue_CF(z)
}

function M_Dialogue_CF(z) {
	$('.M_Dialogue_C:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Center:eq(' + z + ')').css('display', 'block')
	});
	$('.M_Dialogue_Center:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Center:eq(' + z + ')').css('display', 'none')
	});
	$('.M_Dialogue_Center:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Center:eq(' + z + ')').css('display', 'none')
	})
}
let M_Dialogue_R = $('.M_Dialogue_R');
for (let z = 0; z < M_Dialogue_R.length; z++) {
	M_Dialogue_RF(z)
}

function M_Dialogue_RF(z) {
	$('.M_Dialogue_R:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Right:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Right:eq(' + z + ')>div').css('width', '400px')
	});
	$('.M_Dialogue_Right:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Right:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Right:eq(' + z + ')>div').css('width', '0')
	});
	$('.M_Dialogue_Right:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Right:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Right:eq(' + z + ')>div').css('width', '0')
	})
}
let M_Dialogue_L = $('.M_Dialogue_L');
for (let z = 0; z < M_Dialogue_L.length; z++) {
	M_Dialogue_LF(z)
}

function M_Dialogue_LF(z) {
	$('.M_Dialogue_L:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Left:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Left:eq(' + z + ')>div').css('width', '400px')
	});
	$('.M_Dialogue_Left:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Left:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Left:eq(' + z + ')>div').css('width', '0')
	});
	$('.M_Dialogue_Left:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Left:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Left:eq(' + z + ')>div').css('width', '0')
	})
}
let M_Dialogue_T = $('.M_Dialogue_T');
for (let z = 0; z < M_Dialogue_T.length; z++) {
	M_Dialogue_TF(z)
}

function M_Dialogue_TF(z) {
	$('.M_Dialogue_T:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Top:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Top:eq(' + z + ')>div').css('height', '400px')
	});
	$('.M_Dialogue_Top:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Top:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Top:eq(' + z + ')>div').css('height', '0')
	});
	$('.M_Dialogue_Top:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Top:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Top:eq(' + z + ')>div').css('height', '0')
	})
}
let M_Dialogue_B = $('.M_Dialogue_B');
for (let z = 0; z < M_Dialogue_B.length; z++) {
	M_Dialogue_BF(z)
}

function M_Dialogue_BF(z) {
	$('.M_Dialogue_B:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Bottom:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Bottom:eq(' + z + ')>div').css('height', '400px')
	});
	$('.M_Dialogue_Bottom:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Bottom:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Bottom:eq(' + z + ')>div').css('height', '0')
	});
	$('.M_Dialogue_Bottom:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Bottom:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Bottom:eq(' + z + ')>div').css('height', '0')
	})
}

function showMessage(message, type, time) {
	let str = '';
	switch (type) {
		case 'success':
			str = `<div class="M_success_message"><span class="mes-text "style="font-size:14px;"><i class="fa fa-check-circle-o"style="margin-right:10px;"></i>${message}</span></div>`;
			break;
		case 'error':
			str = `<div class="M_error_message"><span class="mes-text"style="font-size:14px;"><i class="fa fa-times-circle"style="margin-right:10px;"></i>${message}</span></div>`;
			break;
		case 'info':
			str = `<div class="M_info_message"><span class="mes-text"style="font-size:14px;"><i class="fa fa-question-circle"style="margin-right:10px;"></i>${message}</span></div>`;
			break;
		case 'warning':
			str = `<div class="M_warning_message"><span class="mes-text"style="font-size:14px;"><i class="fa fa-info-circle"style="margin-right:10px;"></i>${message}</span></div>`;
			break
	}
	$('body').append(str);
	setTimeout(function () {
		$('.M_' + type + '_message').remove()
	}, time)
}
let M_Success_message = $('.M_Success_message');
for (let z = 0; z < M_Success_message.length; z++) {
	M_Success_messageF(z)
}

function M_Success_messageF(z) {
	let SuccessText = $('.M_Success_message:eq(' + z + ')').text();
	$('.M_Success_message:eq(' + z + ')').text('');
	$('.M_Success_message:eq(' + z + ')').append(`<div style="width: 95%">${SuccessText}</div>`);
	$('.M_Success_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Success_message:eq(' + z + ')> .M_msg_Delete').click(function () {
		$('.M_Success_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Error_message = $('.M_Error_message');
for (let z = 0; z < M_Error_message.length; z++) {
	M_Error_messageF(z)
}

function M_Error_messageF(z) {
	let ErrorText = $('.M_Error_message:eq(' + z + ')').text();
	$('.M_Error_message:eq(' + z + ')').text('');
	$('.M_Error_message:eq(' + z + ')').append(`<div style="width: 95%">${ErrorText}</div>`);
	$('.M_Error_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Error_message:eq(' + z + ')> .M_msg_Delete').click(function () {
		$('.M_Error_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Info_message = $('.M_Info_message');
for (let z = 0; z < M_Info_message.length; z++) {
	M_Info_messageF(z)
}

function M_Info_messageF(z) {
	let InfoText = $('.M_Info_message:eq(' + z + ')').text();
	$('.M_Info_message:eq(' + z + ')').text('');
	$('.M_Info_message:eq(' + z + ')').append(`<div style="width: 95%">${InfoText}</div>`);
	$('.M_Info_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Info_message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Info_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Warning_message = $('.M_Warning_message');
for (let z = 0; z < M_Warning_message.length; z++) {
	M_Warning_messageF(z)
}

function M_Warning_messageF(z) {
	let WarningText = $('.M_Warning_message:eq(' + z + ')').text();
	$('.M_Warning_message:eq(' + z + ')').text('');
	$('.M_Warning_message:eq(' + z + ')').append(`<div style="width: 95%">${WarningText}</div>`);
	$('.M_Warning_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Warning_message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Warning_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Success_Message = $('.M_Success_Message');
for (let z = 0; z < M_Success_Message.length; z++) {
	M_Success_MessageF(z)
}

function M_Success_MessageF(z) {
	let SuccessTextI = $('.M_Success_Message:eq(' + z + ')').text();
	$('.M_Success_Message:eq(' + z + ')').text('');
	$('.M_Success_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-check-circle-o"style="font-size: 18px;margin-right:10px;"></i>${SuccessTextI}</div>`);
	$('.M_Success_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Success_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Success_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Error_Message = $('.M_Error_Message');
for (let z = 0; z < M_Error_Message.length; z++) {
	M_Error_MessageF(z)
}

function M_Error_MessageF(z) {
	let ErrorTextI = $('.M_Error_Message:eq(' + z + ')').text();
	$('.M_Error_Message:eq(' + z + ')').text('');
	$('.M_Error_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-times-circle"style="font-size: 18px;margin-right:10px;"></i>${ErrorTextI}</div>`);
	$('.M_Error_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Error_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Error_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Info_Message = $('.M_Info_Message');
for (let z = 0; z < M_Info_Message.length; z++) {
	M_Info_MessageF(z)
}

function M_Info_MessageF(z) {
	let InfoTextI = $('.M_Info_Message:eq(' + z + ')').text();
	$('.M_Info_Message:eq(' + z + ')').text('');
	$('.M_Info_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-question-circle"style="font-size: 18px;margin-right:10px;"></i>${InfoTextI}</div>`);
	$('.M_Info_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Info_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Info_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Warning_Message = $('.M_Warning_Message');
for (let z = 0; z < M_Warning_Message.length; z++) {
	M_Warning_MessageF(z)
}

function M_Warning_MessageF(z) {
	let WarningTextI = $('.M_Warning_Message:eq(' + z + ')').text();
	$('.M_Warning_Message:eq(' + z + ')').text('');
	$('.M_Warning_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-info-circle"style="font-size: 18px;margin-right:10px;"></i>${WarningTextI}</div>`);
	$('.M_Warning_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Warning_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Warning_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Warning_Message_a = $('.M_Warning_Message_a');
for (let z = 0; z < M_Warning_Message_a.length; z++) {
	M_Warning_Message_aF(z)
}

function M_Warning_Message_aF(z) {
	let WarningTextIa = $('.M_Warning_Message_a:eq(' + z + ')').text();
	$('.M_Warning_Message_a:eq(' + z + ')').text('');
	$('.M_Warning_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-info-circle"style="font-size: 18px;margin-right:10px;"></i>${WarningTextIa}</div>`)
}
let M_Success_Message_a = $('.M_Success_Message_a');
for (let z = 0; z < M_Success_Message_a.length; z++) {
	M_Success_Message_aF(z)
}

function M_Success_Message_aF(z) {
	let SuccessTextIa = $('.M_Success_Message_a:eq(' + z + ')').text();
	$('.M_Success_Message_a:eq(' + z + ')').text('');
	$('.M_Success_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-check-circle-o"style="font-size: 18px;margin-right:10px;"></i>${SuccessTextIa}</div>`)
}
let M_Error_Message_a = $('.M_Error_Message_a');
for (let z = 0; z < M_Error_Message_a.length; z++) {
	M_Error_Message_aF(z)
}

function M_Error_Message_aF(z) {
	let ErrorTextIa = $('.M_Error_Message_a:eq(' + z + ')').text();
	$('.M_Error_Message_a:eq(' + z + ')').text('');
	$('.M_Error_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-times-circle"style="font-size: 18px;margin-right:10px;"></i>${ErrorTextIa}</div>`)
}
let M_Info_Message_a = $('.M_Info_Message_a');
for (let z = 0; z < M_Info_Message_a.length; z++) {
	M_Info_Message_aF(z)
}

function M_Info_Message_aF(z) {
	let InfoTextIa = $('.M_Info_Message_a:eq(' + z + ')').text();
	$('.M_Info_Message_a:eq(' + z + ')').text('');
	$('.M_Info_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-question-circle"style="font-size: 18px;margin-right:10px;"></i>${InfoTextIa}</div>`)
}
let TabL = $('.M_Table_Array');
for (let z = 0; z < TabL.length; z++) {
	GetTable(z)
}

function GetTable(z) {
	if ($('.M_Table_Array > .T') != null || $('.M_Table_Array > .T') != undefined) {
		let TableArray = {};
		let arr1 = $('.M_Table_Array > .T')[0].innerText;
		let arr2 = $('.M_Table_Array > .T')[1].innerText;
		TableArray.head = JSON.parse(arr1);
		TableArray.data = JSON.parse(arr2);
		if($('.M_Table_Array > .T').length>=3){
			let configure = $('.M_Table_Array > .T')[2].innerText;
			TableArray.configure = JSON.parse(configure)
		}
		$('.M_Table_Array:eq(' + z + ')').empty();
		$('.M_Table_Array:eq(' + z + ')').append(`<li class="M_Headitem_Blue Flex"></li>`);
		for (let i = 0; i < TableArray.head.length; i++) {
			if(TableArray.configure){
				for(let c = 0 ;c <TableArray.configure.length;c++){
					if(TableArray.configure[c].name == TableArray.head[i]){
						$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div style="${TableArray.configure[c].style}">${TableArray.head[i]}</div>`)
					}else{
						$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div>${TableArray.head[i]}</div>`)
					}
				}
			}else{
				$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div>${TableArray.head[i]}</div>`)
			}
		}
		for (let i = 0; i < TableArray.data.length; i++) {
			$('.M_Table_Array:eq(' + z + ')').append(`<li class="M_Tritem Flex"></li>`);
			let tableitem = $('.M_Table_Array>.M_Tritem')[i];
			for (let x = 0; x < TableArray.head.length; x++) {
				for (let key in TableArray.data[i]) {
					if (TableArray.head[x] == key) {
						if(TableArray.configure){
							if (TableArray.head[x] == '操作') {
								switch (TableArray.data[i][key]) {
									case 'b':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-search"> 查看</i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-question-circle"> 其他</i></button></div>`);
										break;
									case 'a':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-bars"> </i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-info-circle"></i></button></div>`);
										break;
									case '':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`);
										break
								}
							} else {
								if(TableArray.configure){
									for(let c = 0 ;c <TableArray.configure.length;c++){
										if(TableArray.configure[c].name == key){
											$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div style="${TableArray.configure[c].style}">${TableArray.data[i][key]}</div>`)
										}else{
											$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div >${TableArray.data[i][key]}</div>`)
										}
									}
								}else{
									$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`)
								}
							}
						}else{
							if (TableArray.head[x] == '操作') {
								switch (TableArray.data[i][key]) {
									case 'b':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-search"></i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-question-circle"></i></button></div>`);
										break;
									case 'a':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-bars"></i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-info-circle"></i></button></div>`);
										break;
									case '':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`);
										break
								}
							} else {
								$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`)
							}
						}
						
					}
				}
			}
		}
		TableArray = {}
	}
}
let Ptitle = $('.M_P_Title');
for (let z = 0; z < Ptitle.length; z++) {
	pTitle(z)
}

function pTitle(z) {
	let content = $('.M_P_Title:eq(' + z + ')').text();
	$('.M_P_Title:eq(' + z + ')').text('');
	$('.M_P_Title:eq(' + z + ')').append(`<span style="color: skyblue;font-weight: 700;">|</span>${content}`)
}
let M_picture = $('.M_picture');
for (let z = 0; z < M_picture.length; z++) {
	let M_picture_arr = $('.M_picture:eq(' + z + ')').text();
	let M_pictureArr = JSON.parse(M_picture_arr);
	let ParamData = M_pictureArr[M_pictureArr.length - 1];
	M_pictureArr.splice(M_pictureArr.length - 1, M_pictureArr.length);
	$('.M_picture:eq(' + z + ')').text('');
	$('.M_picture:eq(' + z + ')').append(`<img src="${M_pictureArr[0]}"alt=""><p class="radius"></p><p class="title"></p><div class="arrowhead-left"id="al"><img src="http://crazy.lovemysoul.vip/images/prev.png"alt=""srcset=""></div><div class="arrowhead-right"id="ar"><img src="http://crazy.lovemysoul.vip/images/next.png"alt=""srcset=""></div>`);
	if (ParamData.height) {
		$('.M_picture:eq(' + z + ')').css('height', ParamData.height);
		$('.M_picture:eq(' + z + ')>img').css('height', ParamData.height);
	}
	if (ParamData.width) {
		$('.M_picture:eq(' + z + ')').css('width', ParamData.width);
		$('.M_picture:eq(' + z + ')>img').css('width', ParamData.width);
	}
	M_pictureF(z, M_pictureArr, ParamData.timer)
}

function M_pictureF(z, M_pictureArr, timer) {
	$('.M_picture:eq(' + z + ')').mouseover(function () {
		$('.M_picture:eq(' + z + ')>.arrowhead-left').stop().animate({left: "0"},"slow");
		$('.M_picture:eq(' + z + ')>.arrowhead-right').stop().animate({right: "0"},"slow");
	});
	$('.M_picture:eq(' + z + ')').mouseout(function () {
		$('.M_picture:eq(' + z + ')>.arrowhead-left').stop().animate({left: -41+"px"},"slow");
		$('.M_picture:eq(' + z + ')>.arrowhead-right').stop().animate({right: -41+"px"},"slow");
  	});
	let address = M_pictureArr;
	let imgs = $('.M_picture:eq(' + z + ')>img')[0];
	let len = address.length;
	let str = "";
	let pp = $('.M_picture:eq(' + z + ')>p');
	let al = $('.M_picture:eq(' + z + ')>#al')[0];
	let ar = $('.M_picture:eq(' + z + ')>#ar')[0];
	let n = 0;
	for (i = 0; i < len; i++) {
		str += ' <span></span>'
	}
	pp[1].innerHTML = str;
	let spans = pp[1].getElementsByTagName('span');
	spans[0].className = 'active';
	for (i = 0; i < len; i++) {
		spans[i].index = i;
		spans[i].onmouseover = function () {
			for (i = 0; i < len; i++) {
				spans[i].className = ""
			}
			n = this.index;
			this.className = 'active';
			imgs.src = address[this.index];
		}
	}
	ar.onclick = function () {
		n++;
		if (n > 5) {
			n = 0
		}
		for (i = 0; i < len; i++) {
			spans[i].className = ""
		}
		imgs.src = address[n];
		spans[n].className = "active"
	};
	al.onclick = function () {
		n--;
		if (n < 0) {
			n = (len - 1);
		}
		for (i = 0; i < len; i++) {
			spans[i].className = ""
		}
		spans[n].className = "active";
		imgs.src = address[n];
	};
	setInterval(ar.onclick, timer);
}
let M_Tag_D = $('.M_Tag_D');
for(let z = 0 ; z<M_Tag_D.length;z++){
	M_Tag_DF(z);
}
function M_Tag_DF(z){
	$('.M_Tag_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_DF"></i>`);
	$('.M_Tag_D:eq('+z+')>i').click(function(){
		$('.M_Tag_D:eq('+z+')').css('display','none');
	})
}
let M_Tag_success_D = $('.M_Tag_success_D');
for(let z = 0 ; z<M_Tag_success_D.length;z++){
	M_Tag_success_DF(z)
}
function M_Tag_success_DF(z){
	$('.M_Tag_success_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_success_DF"></i>`);
	$('.M_Tag_success_D:eq('+z+')>i').click(function(){
		$('.M_Tag_success_D:eq('+z+')').css('display','none')
	})
}
let M_Tag_info_D = $('.M_Tag_info_D');
for(let z = 0 ; z<M_Tag_info_D.length;z++){
	M_Tag_info_DF(z)
}
function M_Tag_info_DF(z){
	$('.M_Tag_info_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_info_DF"></i>`);
	$('.M_Tag_info_D:eq('+z+')>i').click(function(){
		$('.M_Tag_info_D:eq('+z+')').css('display','none');
	})
}

let M_Tag_warning_D = $('.M_Tag_warning_D');
for(let z = 0 ; z<M_Tag_warning_D.length;z++){
	M_Tag_warning_DF(z)
}
function M_Tag_warning_DF(z){
	$('.M_Tag_warning_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_warning_DF"></i>`);
	$('.M_Tag_warning_D:eq('+z+')>i').click(function(){
		$('.M_Tag_warning_D:eq('+z+')').css('display','none');
	})
}

let M_Tag_danger_D = $('.M_Tag_danger_D');
for(let z = 0 ; z<M_Tag_danger_D.length;z++){
	M_Tag_danger_DF(z)
}
function M_Tag_danger_DF(z){
	$('.M_Tag_danger_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_danger_DF"></i>`);
	$('.M_Tag_danger_D:eq('+z+')>i').click(function(){
		$('.M_Tag_danger_D:eq('+z+')').css('display','none')
	})
}
let M_Breadcrumb = $('.M_Breadcrumb');
for(let z = 0;z<M_Breadcrumb.length;z++){
	M_BreadcrumbF(z);
}
function M_BreadcrumbF(z){
	let M_BreadcrumbFtext = $('.M_Breadcrumb:eq('+z+')').text();
	var M_BreadcrumbFdata = JSON.parse(M_BreadcrumbFtext);
	$('.M_Breadcrumb:eq('+z+')').text('');

	for(let x =0 ;x<M_BreadcrumbFdata.length;x++){

		if(x !=M_BreadcrumbFdata.length-1){
			$('.M_Breadcrumb:eq('+z+')').append(`
				<span>
					<a href="${M_BreadcrumbFdata[x].link}" >${M_BreadcrumbFdata[x].name}</a>
					</span><i class="fa fa-caret-right"></i>
			`);
		}else{
			$('.M_Breadcrumb:eq('+z+')').append(`
				<span class="lengthItem">
					<a href="${M_BreadcrumbFdata[x].link}" >${M_BreadcrumbFdata[x].name}</a>
				</span>
			`);
		}
	}
}
let M_Breadcrumb_ = $('.M_Breadcrumb_');
for(let z = 0;z<M_Breadcrumb_.length;z++){
	M_Breadcrumb_F(z);
}
function M_Breadcrumb_F(z){
	let M_Breadcrumb_Ftext = $('.M_Breadcrumb_:eq('+z+')').text();
	var M_Breadcrumb_Fdata = JSON.parse(M_Breadcrumb_Ftext);
	$('.M_Breadcrumb_:eq('+z+')').text('');

	for(let x =0 ;x<M_Breadcrumb_Fdata.length;x++){

		if(x !=M_Breadcrumb_Fdata.length-1){
			$('.M_Breadcrumb_:eq('+z+')').append(`
				<span>
					<a href="${M_Breadcrumb_Fdata[x].link}" >${M_Breadcrumb_Fdata[x].name}</a>
				</span><i class="fa fa-angle-right"></i>
			`);
		}else{
			$('.M_Breadcrumb_:eq('+z+')').append(`
				<span class="lengthItem">
					<a href="${M_Breadcrumb_Fdata[x].link}" >${M_Breadcrumb_Fdata[x].name}</a>
				</span>
			`);
		}
	}
}
function M_NotFound_2_CF(list){
	$('body').html('');
	$('body').html(`<div style="width: 100%;height: 100%;position: absolute;background: #fff;overflow: hidden;">
	<div class="M_NotFound_2">
		<ul style="display: flex;margin: 20px 0 0 60%;">
			
		</ul>
		<div class="M_NotFound_img_2">

		</div>
		<h2 style="font-size: 40px;text-align: center;caret-color: #000;">
			404 出现错误 页面寻找不到了
		</h2>
	</div>
</div>`);
	for(let z =0 ; z<list.length;z++){
		$('.M_NotFound_2>ul').append(`
			<li class="nav404_2" style="text-align: center; border-bottom: 1px solid #e5e5e5;padding: 0 5px;
			margin: 0 20px;">
				<a class="nav404_2" href="${list[z].link}" style="font-size: 16px;" rel="noopener noreferrer">${list[z].name}</a>
			</li>
		`);
	};
}

function M_NotFound_CF(list){
	$('body').html('');
	$('body').html(`<div style="width: 100%;height: 100%;position: absolute;background: #fff;overflow: hidden;">
	<div class="M_NotFound" style="width: 900px;margin: 10% auto;">
		<div class="M_NotFound_img" style="height: 400px;">

		</div>
		<div class="M_NotFound_box Flex">
			<div class="M_Btn" style="background: rgba(0, 0, 0, 0);
				margin: 0 auto;
					padding: 5px 25px;
					color: #20A0FF;border-radius: 15px; ">
				<a href="${list.link}">${list.name}</a>
			</div>
		</div>
	</div>
</div>`);
}
var tab_navcolor = $('.tab_nav');
for(let z = 0 ; z< tab_navcolor.length;z++){

	tab_navcolorf(z);
}
function tab_navcolorf(z){
	$('.M_color').change(function () {
		$('.tab_nav').css('background',this.value);
		$('.tab_nav>div').css('background',this.value);
		$('.list').css('background',this.value) ;
		
	})
}
