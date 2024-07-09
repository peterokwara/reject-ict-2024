<script lang="ts">
	import testimonials from '$lib/data/testimonials.json';
</script>

<!-- testimonials -->
<div class="py-24 sm:py-32">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-xl mx-auto text-center">
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				<span class="text-primary">You</span> Are Not <span class="text-primary">Alone</span>
			</p>
		</div>
		<div class="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
				{#each testimonials as testimonial}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="p-8 text-sm leading-6 bg-gray-200 rounded-2xl">
							<blockquote class="text-gray-900">
								{#each testimonial.comments as comment}
									<p>
										{comment}
									</p>
								{/each}
							</blockquote>
							<figcaption class="flex items-center mt-6 gap-x-4">
								<img
									class="w-10 h-10 rounded-full bg-gray-50"
									src={testimonial.image}
									alt={`${testimonial.user}'s Twitter profile picture`}
								/>
								<div>
									<div class="font-semibold text-gray-900">{testimonial.user}</div>
									<div class="text-gray-600">{testimonial.handle}</div>
								</div>
							</figcaption>
						</figure>
					</div>
				{/each}
				<!-- More testimonials... -->
			</div>
		</div>
		<div class="flex items-center justify-center w-full pt-10">
			<a href="#cta" class="text-white btn btn-primary">Submit Your Response</a>
		</div>
	</div>
</div>
