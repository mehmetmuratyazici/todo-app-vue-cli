<template>
  <li
    :key="item.id"
    v-for="item in provideData.tasks"
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <input
      :key="`chk_+${item.id}`"
      type="checkbox"
      class="form-check-input"
      v-model="item.isComplate"
      @change="changeStatus(item.id, $event.target.checked)"
    />
    <span>{{ item.task || item.id }}</span>
    <button :key="`btn_+${item.id}`" :disabled="item.isComplate" @click="deleteTask(item)" class="btn btn-danger">Sil</button>
  </li>
</template>

<script>
export default {
  //props: ["tasks"],
  inject: ["provideData", "changeStatus"],
  data() {
    return {
      chkComplate: false,
    };
  },
  methods: {
    /* changeStatus(key, item, event) {
      item.isComplate = event.target.checked
      this.$emit("change-status",key ,event.target.checked)

    }, */
    deleteTask(item) {
      console.log("deleteTask")
      //this.tasks = this.tasks.filter(i => i != item);
      this.$emit("delete-task", item);
    },
  },
  computed: {},
};
</script>