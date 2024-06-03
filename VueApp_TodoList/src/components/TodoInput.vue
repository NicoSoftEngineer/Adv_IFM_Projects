<template>
    <form class=" w-2/5">
        <div class=" flex flex-col border border-spacing-2 border-r-2 rounded items-center w-full ">
            <div class=" w-full m-2 me-2 ms-2">
                <input class=" border w-4/5 rounded" v-model="todo.Title" placeholder="Title" />
            </div>
            <div class=" w-full m-1">
                <input class=" border w-4/5 rounded" v-model="todo.Description"
                    placeholder="Description" />
            </div>
            <button class=" w-4/5 border rounded bg-green-500 text-white  m-2" @click.prevent="addTodo()">Add</button>

        </div>
    </form>

</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits('response')
const todo = ref({ Title: '', Description: '' })

function addTodo() {
    emit('response', todo.value)
    todo.value = { Title: '', Description: '' }
}
</script>

<style lang="scss" scoped></style>