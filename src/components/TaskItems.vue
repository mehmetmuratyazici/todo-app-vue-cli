<template>
    <ul class="list-group" >
         <TaskItem @delete-task="deleteTask" />   
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
        },
        changeStatus(key,val){
            console.log(key,val)
            this.$emit("change-status", key, val)
        }
    }
}
</script>