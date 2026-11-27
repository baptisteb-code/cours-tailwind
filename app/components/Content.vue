<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-start gap-2.5 px-4 pt-4 pb-8 md:pt-10">
        <CreateCatalogCard />
        <CatalogCard
            title="Christmas 2024"
            :tags="['Sneakers', 'boots']"
            date="12.27.2024"
            :products="254"
        />
        <CatalogCard
            title="A very big title for a catalog with many thing"
            :tags="['Sneakers', 'boots', 'Belt', 'Socks', 'Hats', 'Gloves', 'Scarves']"
            date="12.27.2024"
            :products="254"
        />
    </div>
</template>
