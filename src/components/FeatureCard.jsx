export const Feature = () => (
  <div className="group flex aspect-square transform flex-col gap-5 rounded-2xl bg-white/5 p-7 duration-150 hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:shadow-lg max-w-[324px] place-self-center">
    <img
      src="img_placeholder_1.jpg"
      alt="placeholder_image"
      class="aspect-square h-10 self-start rounded-full object-cover"
    />
    <h3 className="manrope-700 text-xl text-primary-foreground">Feature</h3>
    <p className="line-clamp-6 overflow-hidden text-ellipsis text-sm leading-[1.7]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);
