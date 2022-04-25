<template>
  <Form @onSubmit="handleSubmit"/>
  <NoteList @onRemove="handleRemove" :items="notes"/>
</template>

<script>
import Form from "@/components/Notes/NoteForm";
import NoteList from "@/components/Notes/NoteList";

export default {
  name: "HomePage",
  components: {
    NoteList,
    Form
  },
  data() {
    return {
      notes: [
        {
          title: 'Learn Vue',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        },
        {
          title: 'hello world',
          tags: []
        }
      ]
    }
  },
  mounted() {
    this.getItems()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    handleSubmit(note) {
      this.notes.push({ title: note.title, tags: note.tags })
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    getItems() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    }
  }
}
</script>

<style scoped>

</style>