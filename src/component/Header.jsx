export default function Header() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <p className="text-3xl font-medium">
              <span className="text-[#F5BF42]">Paul</span> Tasker
            </p>
          </a>
        </div>
      </nav>
    </>
  );
}
