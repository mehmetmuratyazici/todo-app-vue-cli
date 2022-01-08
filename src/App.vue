<template>
    <app-header/>

    <div class="container-md">
      <AddTask @add-Task="addTask"/>
      <hr>
      <TaskItems @delete-task="deleteTask" :taskList="tasks"/>
    </div>
    
</template>

<script>
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
        tasks : [
          {
            id:1,
            name: "Todo App complated", 
            createAt : new Date().getTime(),
            isComplete : false
          },
        ],
    }
  },
  methods: {
    addTask(event){
        this.task = event.target.value;
        this.tasks.push(
          {
            id: this.tasks.length+1,
            name:event.target.value,
            createAt: new Date().getTime(),
            isComplete : false,
          }
        );
        event.target.value = ""
    },
    deleteTask(item){
      this.tasks = this.tasks.filter(i => i != item);
    }
  },
}
</script>