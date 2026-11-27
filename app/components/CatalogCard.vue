<script setup>
const props = defineProps({
    title: { type: String, required: true },
    tags: { type: Array, default: () => [] },
    date: { type: String, required: true },
    products: { type: Number, default: 0 },
})

// On affiche 4 tags maximum, le reste devient "+N"
const visibleTags = computed(() => props.tags.slice(0, 4))
const hiddenCount = computed(() => props.tags.length - visibleTags.value.length)
</script>

<template>
    <div class="flex flex-col gap-3 min-h-42.5 bg-white border border-line-card rounded-md p-2.5 font-inter">
        <div class="flex items-center gap-2 flex-1">
            <h2 class="flex-1 font-semibold text-lg text-black">{{ title }}</h2>
            <button class="flex p-3 rounded-full text-ink">
                <Icon name="lucide:ellipsis" class="size-4" />
            </button>
        </div>

        <div class="flex flex-col gap-3">
            <div class="flex flex-wrap items-center gap-2">
                <span v-for="tag in visibleTags" :key="tag" class="bg-badge border border-line-badge rounded px-2 py-0.5 text-xs text-ink">
                    {{ tag }}
                </span>
                <span v-if="hiddenCount > 0" class="bg-badge border border-line-badge rounded px-2.5 py-0.5 text-xs text-ink">
                    +{{ hiddenCount }}
                </span>
            </div>

            <div class="flex flex-col gap-px text-xs">
                <p class="flex gap-1 py-1 text-muted">
                    <span>Created on</span>
                    <span>{{ date }}</span>
                </p>
                <p class="py-1 font-medium text-ink">{{ products }} products</p>
            </div>
        </div>
    </div>
</template>
