<template >
    <input @keypress.enter="addTask" type="text" class="form-control" placeHolder="Enter Your Task"/>
</template>

<script>
export default {
    methods: {
        addTask(event){
            this.$emit("add-Task", event);
        },
        deleteTask(){
            //this.tasks = this.tasks.filter(i => i != item);
        }
    },
}
</script>