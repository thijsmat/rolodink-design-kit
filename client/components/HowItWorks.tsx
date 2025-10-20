export default function HowItWorks() {
  return (
    <section className="py-24 px-8 bg-[rgba(245,245,245,0.2)]">
      <div className="max-w-[1136px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-semibold text-5xl text-azure mb-4">
            Zie hoe het werkt
          </h2>
          <p className="text-xl text-grey max-w-[672px] mx-auto">
            Een klik op elk LinkedIn profiel om je persoonlijke notities toe te
            voegen en te beheren.
          </p>
        </div>

        <div className="max-w-[768px] mx-auto">
          <div className="bg-white border-2 border-azure/10 rounded-2xl shadow-2xl p-8">
            <div className="border-b border-azure/10 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-linkBlue to-linkBlue/80 flex items-center justify-center">
                  <span className="text-white font-semibold text-2xl">SvB</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-2xl text-azure mb-1">
                    Sarah van Berg
                  </h3>
                  <p className="text-grey mb-2">Senior Recruiter @ TalentHub</p>
                  <div className="flex items-center gap-2 text-sm text-grey">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 5.33325C11.7275 5.33325 12.745 5.75468 13.4951 6.50482C14.2452 7.25497 14.6667 8.27239 14.6667 9.33325V13.9999H12V9.33325C12 8.97963 11.8595 8.64049 11.6095 8.39044C11.3594 8.14039 11.0203 7.99992 10.6667 7.99992C10.313 7.99992 9.97391 8.14039 9.72386 8.39044C9.47381 8.64049 9.33334 8.97963 9.33334 9.33325V13.9999H6.66667V9.33325C6.66667 8.27239 7.0881 7.25497 7.83824 6.50482C8.58839 5.75468 9.60581 5.33325 10.6667 5.33325Z"
                        stroke="#0066CC"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.99999 6H1.33333V14H3.99999V6Z"
                        stroke="#0066CC"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.66666 3.99992C3.40304 3.99992 3.99999 3.40297 3.99999 2.66659C3.99999 1.93021 3.40304 1.33325 2.66666 1.33325C1.93028 1.33325 1.33333 1.93021 1.33333 2.66659C1.33333 3.40297 1.93028 3.99992 2.66666 3.99992Z"
                        stroke="#0066CC"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>500+ connecties</span>
                    <span>•</span>
                    <span>Amsterdam, Nederland</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-linkBlue to-linkBlue/80 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">R</span>
                  </div>
                  <h4 className="font-semibold text-azure">
                    Rolodink Notities
                  </h4>
                </div>
                <button className="flex items-center gap-1 text-gold text-sm hover:text-gold/80 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66666 14H14"
                      stroke="#B8860B"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.116 4.54126C14.4685 4.18888 14.6665 3.71091 14.6666 3.2125C14.6666 2.71409 14.4687 2.23607 14.1163 1.8836C13.7639 1.53112 13.286 1.33307 12.7876 1.33301C12.2892 1.33295 11.8111 1.53088 11.4587 1.88326L2.56133 10.7826C2.40654 10.9369 2.29207 11.127 2.228 11.3359L1.34733 14.2373C1.3301 14.2949 1.3288 14.3562 1.34356 14.4145C1.35833 14.4728 1.38861 14.5261 1.43119 14.5686C1.47378 14.6111 1.52708 14.6413 1.58544 14.656C1.64379 14.6707 1.70504 14.6693 1.76266 14.6519L4.66466 13.7719C4.87344 13.7084 5.06345 13.5947 5.218 13.4406L14.116 4.54126Z"
                      stroke="#B8860B"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Bewerk
                </button>
              </div>

              <div className="bg-background border border-gold/20 rounded-xl p-4 mb-4">
                <p className="text-grey leading-relaxed">
                  Ontmoet op Networking Event Amsterdam. Geïnteresseerd in AI
                  voor recruitment.
                </p>
                <div className="border-t border-azure/5 mt-4 pt-4">
                  <p className="text-grey text-xs">
                    💡 Tip: Gebruik notities voor follow-ups,
                    gespreksonderwerpen, of persoonlijke details
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-azure/10 bg-azure/5 text-sm text-azure">
                  <span className="w-2 h-2 rounded-full bg-azure"></span>
                  Networking Event Amsterdam
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-linkBlue/10 bg-linkBlue/5 text-sm text-azure">
                  <span className="w-2 h-2 rounded-full bg-linkBlue"></span>
                  AI & Recruitment
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/10 bg-gold/5 text-sm text-azure">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  Follow-up gepland
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 21H21"
                    stroke="#B8860B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.174 6.81189C21.7027 6.28332 21.9998 5.56636 21.9999 4.81875C22 4.07113 21.7031 3.3541 21.1745 2.82539C20.6459 2.29668 19.929 1.99961 19.1813 1.99951C18.4337 1.99942 17.7167 2.29632 17.188 2.82489L3.842 16.1739C3.60981 16.4054 3.43811 16.6904 3.342 17.0039L2.021 21.3559C1.99515 21.4424 1.9932 21.5342 2.01535 21.6217C2.03749 21.7092 2.08292 21.7891 2.14679 21.8529C2.21067 21.9167 2.29062 21.962 2.37815 21.984C2.46569 22.006 2.55755 22.0039 2.644 21.9779L6.997 20.6579C7.31017 20.5626 7.59517 20.392 7.827 20.1609L21.174 6.81189Z"
                    stroke="#B8860B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h5 className="font-semibold text-sm text-azure mb-1">
                Eenvoudig bewerken
              </h5>
              <p className="text-xs text-grey">
                Voeg notities toe met één klik
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 3C15.7275 3.00751 16.2307 3.22317 16.6 3.6L20.4 7.4C20.7768 7.76926 20.9925 8.27246 21 8.8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15.2Z"
                    stroke="#1B2951"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 21V14C17 13.7348 16.8946 13.4804 16.7071 13.2929C16.5196 13.1054 16.2652 13 16 13H8C7.73478 13 7.48043 13.1054 7.29289 13.2929C7.10536 13.4804 7 13.7348 7 14V21"
                    stroke="#1B2951"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h5 className="font-semibold text-sm text-azure mb-1">
                Automatisch opslaan
              </h5>
              <p className="text-xs text-grey">
                Je notities zijn altijd veilig
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-linkBlue/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                    stroke="#0066CC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="#0066CC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="#0066CC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h5 className="font-semibold text-sm text-azure mb-1">
                LinkedIn integratie
              </h5>
              <p className="text-xs text-grey">Werkt naadloos in LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
