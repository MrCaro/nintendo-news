function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 text-center lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Nintendo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
