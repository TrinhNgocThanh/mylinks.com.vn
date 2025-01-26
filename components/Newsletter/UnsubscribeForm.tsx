import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import validator from 'validator'
import style from './newsletterform.module.css'

const isDevelopment = true //TODO

const UnsubscribeForm = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validator.isEmail(email)) {
      toast.error('Định dạng email không hợp lệ')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.status === 200) {
        toast.success('Hủy đăng ký thành công')
        setEmail('')
      } else if (response.status === 404) {
        toast.error('Không tìm thấy người đăng ký')
      } else {
        toast.error('Hủy đăng ký thất bại')
      }
    } catch {
      toast.error('Hủy đăng ký thất bại')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={style.container}>
      <br />
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className={style[`form-wrapper`]}>
        <h2 className={style[`form-title`]}>Hủy đăng ký nhận bản tin của chúng tôi</h2>
        <form onSubmit={handleSubmit} className={style[`form-container`]}>
          <input
            type="email"
            placeholder={isDevelopment ? 'Sắp ra mắt...' : 'Nhập email của bạn'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style[`email-input`]}
            readOnly={isDevelopment}
          />
          <button
            type="submit"
            className={style[`subscribe-button`]}
            disabled={isLoading || isDevelopment}
          >
            {isLoading ? 'Đang hủy đăng ký...' : 'Hủy đăng ký'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default UnsubscribeForm
