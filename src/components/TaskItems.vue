<template>
    <ul class="list-group">
         <TaskItem @delete-task="deleteTask" :tasks="taskList"/>   
    </ul>
</template>

<script>
import TaskItem from "@/components/TaskItem"
export default {
    components: {
        TaskItem,
    },
    props:["taskList"],
    methods:{
        deleteTask(item){
            this.$emit("delete-task",item)
        }
    }
}
</script>