import { useState, useCallback } from 'react'
import { FormState, FormErrors } from '@/types/contact'

interface UseFormProps<T> {
  initialData: T
  validate: (data: T) => FormErrors
  onSubmit: (data: T) => Promise<void>
}

export function useForm<T>({ initialData, validate, onSubmit }: UseFormProps<T>) {
  const [data, setData] = useState<T>(initialData)
  const [state, setState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    errors: {},
    message: ''
  })

  const updateField = useCallback((field: keyof T, value: any) => {
    setData(prev => ({ ...prev, [field]: value }))
    
    // Clear field error when user starts typing
    if (state.errors[field as string]) {
      setState(prev => ({
        ...prev,
        errors: { ...prev.errors, [field as string]: '' }
      }))
    }
  }, [state.errors])

  const handleArrayField = useCallback((field: keyof T, value: string, checked: boolean) => {
    setData(prev => {
      const currentArray = (prev[field] as string[]) || []
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] }
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) }
      }
    })
  }, [])

  const submitForm = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, errors: {}, message: '' }))

    // Validate form
    const validationErrors = validate(data)
    if (Object.keys(validationErrors).length > 0) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        errors: validationErrors,
        message: 'Please fix the errors below'
      }))
      return
    }

    try {
      await onSubmit(data)
      setState({
        isLoading: false,
        isSuccess: true,
        errors: {},
        message: 'Thank you! Your message has been sent successfully.'
      })
      setData(initialData)
    } catch (error) {
      setState({
        isLoading: false,
        isSuccess: false,
        errors: {},
        message: 'Something went wrong. Please try again later.'
      })
    }
  }, [data, validate, onSubmit, initialData])

  const resetForm = useCallback(() => {
    setData(initialData)
    setState({
      isLoading: false,
      isSuccess: false,
      errors: {},
      message: ''
    })
  }, [initialData])

  return {
    data,
    state,
    updateField,
    handleArrayField,
    submitForm,
    resetForm
  }
}