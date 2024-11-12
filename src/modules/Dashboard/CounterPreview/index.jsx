'use client';
import React from 'react';
import { useSelector } from 'react-redux'

export default function CounterPreview() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <h2>CounterPreview</h2>
      {count}
    </div>
  )
}
