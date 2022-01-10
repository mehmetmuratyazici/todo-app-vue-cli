<template>
    <app-header/>

    <div class="container-md">
      <AddTask @add-Task="addTask"/>
      <hr>
      <TaskItems @change-status="changeStatus" @delete-task="deleteTask" :taskList="tasks"/>
    </div>
    
</template>

<script>
import axios from 'axios'
import TaskItems from "@/components/TaskItems"
import AddTask from "@/components/AddTask"
export default {
  components:{
    TaskItems,
    AddTask,
  },
  data() {
    return {
        task : "",
        tasks : [ ],
    }
  },
  methods: {
    addTask(event){
        var item = {
            task: event.target.value,
            authour:"mmy",
            isComplate: false,
            createAt: new Date().getTime()
          }
        axios
        .post(this.firebaseUrl+"/todos.json", item)
        .then(res => {
          if(res.status == 200)
          {
            item.id = res.data.name
            this.tasks.push(item)
          }
        })

        event.target.value = ""
    },
    changeStatus(key, val){
        axios
        .patch(this.firebaseUrl+"/todos/"+ key +".json", {isComplate : val})
        .then(res => {
          if(res.status == 200){
              console.log(res)
          }
        })
    },
    deleteTask(item){
      axios
      .delete(this.firebaseUrl+"/todos/"+item.id+".json")
      .then(res => {
        if(res.status == 200)
          this.tasks = this.tasks.filter(i => i != item);

      })
    },
    updateStatus(item){
      axios
      .patch(this.firebaseUrl+"/todos/"+item.id+".json")
    }
  },
  created() {
    axios
        .get(this.firebaseUrl+"/todos.json")
        .then(res => {
            for(let key in res.data){
              res.data[key].id = key
              this.tasks.push(res.data[key])
            }
        })
        .catch()
  },
}
</script>