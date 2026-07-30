"use client";

import { useState } from "react";
import { day1Activities, day2Activities, day1ParallelActivity } from "@/data/agendaData";

export default function AgendaTable() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  return (
    <div className="container">
      <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
        Agenda del Evento
      </h2>

      {/* Day Tabs */}
      <div className="mb-6 flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => setActiveDay(1)}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${activeDay === 1
              ? "bg-primary text-white shadow-lg"
              : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
            }`}
        >
          28 de Octubre
        </button>
        <button
          onClick={() => setActiveDay(2)}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${activeDay === 2
              ? "bg-primary text-white shadow-lg"
              : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
            }`}
        >
          29 de Octubre
        </button>
      </div>

      <div className="mb-8 text-center">
        <h3 className="text-xl font-bold text-primary md:text-2xl">
          {activeDay === 1
            ? "Día 1: Transferencia Tecnológica y Desarrollo"
            : "Día 2: Innovación Social e Impacto en la sociedad"}
        </h3>
      </div>

      {/* Table */}
      <div className="mx-auto max-w-5xl overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="w-1/4 px-4 py-4 font-semibold text-gray-900 md:px-6 align-middle">
                Hora
              </th>
              <th className="w-1/3 px-4 py-4 font-semibold text-gray-900 md:px-6 align-middle">
                Actividad
              </th>
              <th className="w-5/12 px-4 py-4 font-semibold text-gray-900 md:px-6 align-middle">
                Tema
              </th>
            </tr>
          </thead>
          <tbody>
            {(activeDay === 1 ? day1Activities : day2Activities).map(
              (activity, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                >
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 md:px-6 align-middle">
                    {activity.time}
                  </td>
                  <td className="px-4 py-4 text-gray-700 md:px-6 align-middle">
                    {activity.activity}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 md:px-6 align-middle">
                    {activity.theme}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Parallel Event */}
      {activeDay === 1 && (
        <div className="mx-auto mt-8 max-w-5xl text-center">
          <h3 className="mb-4 text-xl font-bold text-primary md:text-2xl">
            Evento Paralelo
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-center">
              <tbody>
                <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50 bg-white">
                  <td className="w-1/4 whitespace-nowrap px-4 py-4 font-semibold text-gray-900 md:px-6 align-middle">
                    {day1ParallelActivity.time}
                  </td>
                  <td className="w-1/3 px-4 py-4 text-gray-700 md:px-6 align-middle">
                    {day1ParallelActivity.activity}
                  </td>
                  <td className="w-5/12 px-4 py-4 text-sm text-gray-600 md:px-6 align-middle">
                    {day1ParallelActivity.theme}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
