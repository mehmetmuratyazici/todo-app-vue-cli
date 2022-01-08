<template>
    <li :key="item.id" v-for="item in tasks" class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{item.name}}</span>
              <button @click="deleteTask(item)" class="btn btn-danger">Sil</button>
    </li>
</template>

<script>
export default {
    props: [
        "tasks"
    ],
    methods: {
        deleteTask(item){
             //this.tasks = this.tasks.filter(i => i != item);
             this.$emit("delete-task", item)
        }    
    }
}
</script>