<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note"/>
      <TagsList @onItemClick="handleTagClick" :activeItems="activeTags" :items="tags"/>
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList";

export default {
  components: {TagsList},
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      activeTags: []
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', { title: this.value, tags: this.activeTags })
      this.value = ''
      this.activeTags = []
    },
    handleTagClick(tag) {
      const index = this.activeTags.indexOf(tag)
      if (index > -1) {
        this.activeTags.splice(index, 1)
      } else {
        this.activeTags.push(tag)
      }
    }
  },
  name: "NoteForm"
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 0;
  }
}
</style>