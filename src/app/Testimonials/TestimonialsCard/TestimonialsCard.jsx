import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function TestimonialsCard({items}) {
    const stars = Array.from({ length: items.star }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ));
  return (
    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            width={50}
            height={50}
            alt=""
            src={items.img}
            className="size-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center text-yellow-500 gap-1">
              {stars}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-800">{items.name}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-500">{items.subject}</p>
    </blockquote>
  )
}

export default TestimonialsCard
