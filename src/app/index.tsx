import { Header } from "@/components/header"
import { FlatList, View } from "react-native"

import { CategoryButton } from "@/components/category-button"
import { CATEGORIES } from "@/utils/data/products"
import { useState } from "react"

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategory(selectedCategory: string) {
        setCategory(selectedCategory)
    }

    return (
        <View className="pt-8 flex-1">
            <Header title="Faça seu pedido" cartQuantityItems={5} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <CategoryButton
                    title={item}
                    isSelected={item === category}
                    onPress={() => { handleCategory(item) }}
                />}
                horizontal
                className="max-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
    )
}