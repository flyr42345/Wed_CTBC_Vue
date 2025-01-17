console.log("測試")

// 建立Vue應用程式
const app = Vue.createApp({
    // 資料區域
    data() {
        // 資料物件
        return {
            // 第一個文字:值
            firstText: "嗨，這裡是 Vue 的資料!",
            textColor:"red",
            fontSize:24,
            canBuy:false,
            web: [
                "HTML","CSS","Javascript","jQuery","Vue","React","Angular","Git"
            ],
            count:0,
            pointX:0, pointY:0,
            inputText:"預設文字",
            toDoList:[],addToDo:"",isCheck:false,clickPoint:0
        }
    },
    // 方法區(函式)
    methods:{
        // 方法名稱() {}
        test(){
            console.log("我是測試方法");
        },
        methodEvent(e){
            console.log(e);
            console.log(e.target);
            console.log(e.x,e.y);
        },
        getPoint(e){
            this.pointX = e.x;
            this.pointY = e.y;
        },
        addToDoList(){
            // 將addToDo添加到toDoList陣列內
            this.toDoList.push(this.addToDo);
        },
        updatePoint(e){
            this.clickPoint = e.x;
        },
        newAndOldPoint(newX, oldx){
            console.log("舊座標", oldx);
            console.log("新座標", newX);
        }
    },
    // 計算處理區
    computed:{
        checked() {
             if (this.isCheck) return "已經勾選"; //當user將isCheck打勾就會執行
            else return "尚未勾選";
        }
    },
    watch:{
        clickPoint(newPoint){
                console.log(newPoint);
            },
            // 記錄新與舊座標(新資料會在第一個參數)
            clickPoint:"newAndOldPoint"
        }
    
});

// 將app變數安裝到#app元素
app.mount("#app");