<template>
  <Layout class-prefix="layout">
    <Types/>
    <Tags :data-source.sync="tags"/>
    <Notes/>
    <NumberPad/>
  </Layout>
</template>

<script>
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
export default {
  name: 'Money',
  components: {NumberPad, Notes, Tags, Types},
  data() {
    return {
      tags: ["衣","食","住","行"]
    }
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>

</style>