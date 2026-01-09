import { categories } from "@/data/mockData";

export function CategorySection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold md:text-3xl">Browse by Cuisine</h2>
        <p className="mt-2 text-muted-foreground">
          Explore popular categories and find exactly what you're craving
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group flex flex-col items-center gap-3 rounded-xl bg-card p-4 transition-all hover:bg-secondary hover:shadow-md"
            >
              <span className="text-4xl transition-transform group-hover:scale-110">
                {category.icon}
              </span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
