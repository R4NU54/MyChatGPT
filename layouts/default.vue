<template>
  <main class="flex flex-col min-h-screen">
    <!-- Header -->
    <PageHeader class="bg-gray-800 text-white py-4">
      <!-- Contenido del header aquí -->
    </PageHeader>

    <!-- Slot (Contenido principal) -->
    <section class="flex-1">
      <slot />
    </section>

    <!-- Footer -->
    <PageFooter class="bg-gray-800 text-white py-4">
      <!-- Contenido del footer aquí -->
    </PageFooter>
  </main>
</template>
