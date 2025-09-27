'use client'

import { Suspense, lazy } from 'react'
import SkeletonLoader from '@/components/loading/SkeletonLoader'

// Lazy load heavy components for better performance
export const LazyPortfolioGrid = lazy(
  () => import('@/components/PortfolioGrid')
)
export const LazyProjectModal = lazy(() => import('@/components/ProjectModal'))
export const LazyContactForm = lazy(() => import('@/components/ContactForm'))
export const LazyProjectInquiryForm = lazy(
  () => import('@/components/ProjectInquiryForm')
)

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function LazyComponentWrapper({
  children,
  fallback = <SkeletonLoader variant="rectangular" height="200px" />,
}: LazyWrapperProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}
