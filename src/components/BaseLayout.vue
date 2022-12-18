<template>
  <ion-page>
    <!-- <ion-header id="header">
      <ion-toolbar>
        <ion-title size="large">Snake</ion-title>
      </ion-toolbar>
    </ion-header> -->
    
    <ion-content :fullscreen="true">
      <slot/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';

export default {
    name: "BaseLayout",
    components: {
      IonContent,
      // IonHeader,
      IonPage,
      // IonTitle,
      // IonToolbar
    },
}
</script>

<style scoped>
ion-toolbar {
  --background: var(--ion-color-primary);
}

ion-title {
  --color: var(--ion-color-primary-contrast);
  font-size: 30px;
}
</style>
