import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function DisclosureComp() {
  return (
    <div className="bg-black">
      <div className="w-full px-8 py-5 flex">
        <div className="w-4/5 space-y-2 bg-black ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex transform transition-all justify-between w-full py-3 text-[11px] text-left ">
                  <span>Vision</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-3 h-3 transitiona-all duration-300 text-[#f36] `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition ease duration-500 transform"
                  enterFrom="opacity-0 translate-y-5"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-300 transform "
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-3"
                >
                  <Disclosure.Panel className=" pb-2 text-[8px] leading-4 text-white">
                    To continue our path in becoming a highly specialized
                    development shop, with the same mindset in every initiative:
                    quality comes first. To reach that goal, we seek to keep
                    talented people, a working environment that motivates good
                    relationships and of course great teamwork results.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex border-y-[.8px] border-[#282826] justify-between w-full py-3 text-[11px] text-left ">
                  <span>Two Pillars</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-3 h-3 transitiona-all duration-300 text-[#f36] `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition ease duration-500 transform"
                  enterFrom="opacity-0 translate-y-5"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-300 transform "
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-3"
                >
                  <Disclosure.Panel className=" pb-2 text-[8px] leading-4 text-white">
                    Transparency and trust as the foundation in any working
                    relationship. You will not get too far without those, and
                    after 15 years we definitely aim far.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full py-3 text-[11px] text-left ">
                  <span>What are we looking for?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-3 h-3 transitiona-all duration-300 text-[#f36] `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition ease duration-500 transform"
                  enterFrom="opacity-0 translate-y-5"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-300 transform "
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-3"
                >
                  <Disclosure.Panel className=" pb-2 text-[8px] leading-4 text-white">
                    Transparency and trust as the foundation in any working
                    relationship. You will not get too far without those, and
                    after 15 years we definitely aim far.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
