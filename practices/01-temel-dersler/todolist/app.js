const app = new Vue({
    el: '#app',
    name: 'Umut UZ',
    data: {
        dataList:[
            {id:1,title:'VueJs Öğren',status:true, list:'Genel'},
            {id:2,title:'NodeJs Öğren',status:true, list:'İş'},
            {id:3,title:'Çay Al',status:false, list:'Genel'},
            {id:4,title:'Mac Pro Al',status:false, list:'Alışveriş'},
        ],
        dataItem:{
            title:'',
            status:false
        },
        listItems: [
            { id:1, title:"Genel" },
            { id:2, title:"İş" },
            { id:3, title:"Alışveriş" },
        ],
        activeListItem:{},
        filteredDataList: [],
        newListItem:{},
    },
    methods:{
        toggleTodoListStatus(index){
            this.todoList[index].status = !this.todoList[index].status;
        },
        toggleTodoListFinishedStatus(index){
            this.todoListFinished[index].status = !this.todoListFinished[index].status;
        },
        saveItem(){
            if(this.dataItem.title != ""){
                this.dataItem.id =  this.dataList.length + 1;
                this.dataItem.list = this.activeListItem.title;
                this.dataList.push(this.dataItem);
                this.clearForm();
                this.changeListItem(this.activeListItem.id);
            }
        },
        clearForm(){
            this.dataItem = { title:'', status:false };
        },
        deleteItem(id){
            this.filteredDataList = this.dataList.filter(todo => todo.id !== id);

        },
        changeListItem(id){
            const listItem = this.listItems.find(x => x.id === id);
            if(listItem !== null) {
                this.activeListItem = listItem;
                this.filteredDataList = this.dataList.filter(item => item.list == listItem.title);
            }
        },
        listItemSave(){
            if(this.newListItem.title != null)
            {
                this.newListItem.id =  this.newListItem.length+1;
                this.listItems.push(this.newListItem);
                this.newListItem = {};
            }
        },
        listItemCount(title){
            return this.dataList.filter(item => item.list === title).length;
        }
    },
    created(){
        const defaultListItem = this.listItems[0];
        if(defaultListItem !== null)
        {
            this.changeListItem(defaultListItem.id)
        }
    },
    computed:{
        todoList(){
            return this.filteredDataList.filter(todo => todo.status === false);
        },
        todoListFinished(){
            return this.filteredDataList.filter(todo => todo.status === true);
        },
    }
});