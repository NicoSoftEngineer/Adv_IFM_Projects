<template>
    <h2>Done todos: {{ doneTodosCount }}</h2>
    <!-- <button @click="HideCompleted()">HideCompleted</button> -->
    <div class=" grid justify-center" style="width: 75vw;">
        <div class=" grid justify-center w-fit">
            <div v-for="item in props.Todos" :key="item.Id" class="bg-blue-100 flex p-1 rounded flex-grow m-2 h-min">
                <input class="m-4" type="checkbox" v-model="item.Done" />
                <div class="m-2 text-left wrap">
                    <h2 class="text-lg" :class="{ 'strikethrough': item.Done }">{{ item.Title }}</h2>
                    <p :class="{ 'strikethrough': item.Done }" class="text-sm">{{ item.Description }}</p>
                </div>
                <button class="  border rounded  bg-red-400 m-2 w-12 h-12 grid items-center justify-center" @click="deleteTodo(item.Id)">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"  fill="none" >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                </button>

            </div>
        </div>
    </div>



</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'
const doneTodosCount = computed(() => {
    return props.Todos.filter(todo => todo.Done).length
})
const emit = defineEmits('response')

const props = defineProps({
    Todos: []
})
function deleteTodo(id) {
    console.log(id)
    emit('response', id)
}
</script>

<style lang="css" scoped>
.strikethrough {
    text-decoration: line-through;
}

.wrap {
    word-wrap: break-word;
    max-width: 60vw;
}
</style>