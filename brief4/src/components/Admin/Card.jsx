import React from 'react'

const Card = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <img
          src="https://picsum.photos/seed/admin3/400/300"
          alt="Tajine chefchaouane"
          className="w-full h-40 object-cover rounded-3xl mb-4"
        />
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-base font-bold text-gray-900">Fès</span>
            <h3 className="text-base font-bold text-gray-900">Tajine chefchaouane</h3>
          </div>
          <p className="text-sm text-gray-600">Tajine chefchaouane Tajine chefchaouane Tajine chefchaouane Tajine chefchaouane</p>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
            Modifier
          </button>
          <button className="flex-1 px-4 py-2 border border-red-300 text-red-600 rounded-full text-sm font-medium">
            Supprimer
          </button>
        </div>
      </div>
  )
}

export default Card