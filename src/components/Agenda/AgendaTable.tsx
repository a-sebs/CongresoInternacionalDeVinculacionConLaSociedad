"use client";

import { useState } from "react";
import { day1Activities, day2Activities } from "@/data/agendaData";

export default function AgendaTable() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  return (
    <div className="container">
      <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
        Agenda del Evento
      </h2>

      {/* Day Tabs */}
      <div className="mb-12 flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => setActiveDay(1)}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            activeDay === 1
              ? "bg-primary text-white shadow-lg"
              : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
          }`}
        >
          28 de Octubre
        </button>
        <button
          onClick={() => setActiveDay(2)}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            activeDay === 2
              ? "bg-primary text-white shadow-lg"
              : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
          }`}
        >
          29 de Octubre
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-4 text-left font-semibold text-gray-900 md:px-6">
                Hora
              </th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 md:px-6">
                Actividad
              </th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 md:px-6">
                Tema
              </th>
            </tr>
          </thead>
          <tbody>
            {(activeDay === 1 ? day1Activities : day2Activities).map(
              (activity, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 md:px-6">
                    {activity.time}
                  </td>
                  <td className="px-4 py-4 text-gray-700 md:px-6">
                    {activity.activity}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 md:px-6">
                    {activity.theme}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
