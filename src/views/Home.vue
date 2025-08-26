<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-50">
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#FE6A01]/5 to-transparent"
      ></div>
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 25% 25%,
            rgba(92, 248, 173, 0.03) 2px,
            transparent 2px
          );
          background-size: 60px 60px;
        "
      ></div>
    </div>

    <!-- Header -->
    <div class="relative z-10 pt-8 pb-6 px-6">
      <div class="flex items-center justify-center space-x-3 mb-2">
        <div
          class="w-10 h-10 bg-gradient-to-r from-[#x] to-[#62CD9A] rounded-xl flex items-center justify-center"
        >
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="LAWMA Logo" />
        </div>
        <div>
          <h1
            class="text-[#FE6A01] text-2xl font-bold uppercase tracking-wider font-lufga"
          >
            LAWMA
          </h1>
          <p class="text-gray-400 text-sm font-medium font-lufga-medium">
            Stakeholder's Forum
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 pb-8 min-h-[calc(100vh-200px)]"
    >
      <!-- Left Section - Welcome -->
      <div
        class="w-full lg:w-1/2 flex flex-col space-y-8 justify-center text-center lg:text-left mb-8 lg:mb-0"
      >
        <div class="space-y-6">
          <div v-if="data" class="space-y-4">
            <h2
              class="text-4xl lg:text-6xl font-bold text-white leading-tight font-lufga"
            >
              Welcome <br />
              <span
                class="bg-gradient-to-r from-[#FE6A01] to-[#62CD9A] text-black px-4 py-2 rounded-xl inline-block"
              >
                {{ data.name }}
              </span>
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed font-lufga-medium">
              To the Lagos Waste Management Authority <br />
              <span class="text-[#FE6A01] font-semibold">
                One-Day Stakeholders Forum</span
              >
            </p>
          </div>
        </div>

        <!-- Action Button -->
        <div class="flex justify-center lg:justify-start">
          <button
            class="group bg-gradient-to-r from-[#5CF8AD] to-[#FE6A01] text-black font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#5CF8AD]/25 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#5CF8AD]/20 flex items-center space-x-3"
            @click="$router.push({ name: 'Commit' })"
          >
            <span class="font-lufga-medium">Make a Pledge</span>
            <img
              src="@/assets/arrow.svg"
              alt=""
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <!-- Right Section - Conference Program -->
      <div class="w-full lg:w-1/2 flex justify-center items-center">
        <div
          class="bg-[#FE6A01] w-full max-w-2xl h-[600px] flex flex-col text-white p-8 overflow-y-auto relative rounded-2xl border border-gray-700 shadow-2xl"
        >
          <!-- Header with circles and title -->
          <div class="text-center mb-8">
            <!-- <div class="flex items-center justify-center space-x-3 mb-4">
              <div class="w-20 h-20 bg-green-400 rounded-full"></div>
              <div class="w-20 h-20 bg-orange-400 rounded-full"></div>
            </div> -->
            <h1
              class="text-2xl font-bold tracking-wide text-white mb-1 font-lufga-semibold"
            >
              CDDW Conference
            </h1>
            <p class="text-lg text-white font-lufga-medium">Program</p>
          </div>

          <!-- Main content container -->
          <div class="flex-1 space-y-4 font-lufga-medium">
            <!-- 01 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">01:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    09:30 am - 10:00 am
                  </p>
                  <p class="text-sm">Arrival and Registration</p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 02 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">02:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    10:00 am - 10:05 am
                  </p>
                  <p class="text-sm">Opening Music / National Anthem</p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 03 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">03:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    10:05 am - 10:15 am
                  </p>
                  <p class="text-sm mb-2">
                    Welcome/Opening Address/ Road map & Technical
                  </p>
                  <p
                    class="bg-[#379700] text-[#000000] px-2 py-1 text-xs font-medium inline-block"
                  >
                    Speaker: Dr Muyiwa Gbadegesin MD/CEO
                  </p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 04 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">04:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    10:20 am - 11:00 am
                  </p>
                  <p class="text-sm mb-2">Goodwill messages</p>
                  <!-- <p
                    class="bg-[#379700] text-[#000000] text-black px-2 py-1 text-xs font-medium inline-block mb-3"
                  >
                    Speakers
                  </p>
                  <div class="space-y-1">
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Hon. Commissioner, Lagos State Ministry of Physical
                        Planning and Urban Development.
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Special Adviser (S.A) E-GIS & Planning
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Hon. Commissioner, Lagos State Ministry of Housing
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Lagos State Building Control Agency (LASBCA)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Nigerian Institute of Building (NIOB)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Nigerian Institute of Quantity Surveyors
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Association of Consulting Architects of Nigeria
                        (ACANigeria)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Association of Waste Managers of Nigeria (AWAN)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Nigeria Institute of Estate Surveyor and Valuers (NIESU)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Real Estate Development Association of Nigeria (REDAN)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        International Facility Management Association (IFMA)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Lagos State Emergency Management Agency (LASEMA)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p class="text-sm">
                        Lagos State Development & Property Corporation (LSDPC)
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                  </div> -->
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 05 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">05:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    11:00 am - 11:30 am
                  </p>
                  <p class="text-sm mb-2">Keynote Addresses</p>
                  <p
                    class="bg-[#379700] text-[#000000] px-2 py-1 text-xs font-medium inline-block mb-2"
                  >
                    Speaker: Hon. Commissioner of Environment and Water Resource
                    - Mr. Tokunbo Wahab
                  </p>
                  <p
                    class="bg-orange-500 text-white px-2 py-1 text-xs font-semibold inline-block mb-2"
                  >
                    Guest Speaker:
                  </p>
                  <p
                    class="bg-[#379700] text-[#000000] px-2 py-1 text-xs font-semibold inline-block mb-2"
                  >
                    Topic 1 - BRIDGING THE GAP BETWEEN POLICY AND PRACTICE:
                    STRENGTHENING COMPLIANCE IN CONSTRUCTION AND DEMOLITION
                    WASTE MANAGEMENT
                  </p>
                  <p
                    class="bg-[#379700] text-[#000000] px-2 py-1 text-xs font-medium inline-block"
                  >
                    Speaker: Engr Tijani Ajibola
                  </p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 06 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">06:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    12:00 pm - 12:40 pm
                  </p>
                  <p class="text-sm mb-2">Panel Session</p>
                  <p
                    class="bg-[#379700] text-[#000000] px-2 py-1 text-xs font-semibold inline-block mb-3"
                  >
                    Topic I - Driving Accountability in Urban Waste Systems: The
                    Role of Professional Associations and Industry
                    Self-Regulation
                  </p>
                  <p
                    class="bg-orange-500 text-white px-2 py-1 text-xs font-semibold inline-block mb-3"
                  >
                    Panelists/Moderator Suggestions:
                  </p>
                  <div class="space-y-3">
                    <div>
                      <p class="text-sm">
                        <span class="text-white">Name:</span>
                        <span class="text-[#5CF8AD] font-semibold"
                          >Mr Segun Adebayo</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Organization:</span>
                        <span class="text-[#5CF8AD]"
                          >Pilar & Frames Limited</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Position Held:</span>
                        <span class="text-[#5CF8AD]"
                          >Chief Executive Officer</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">To Do:</span>
                        <span class="text-[#5CF8AD] font-medium"
                          >Moderator</span
                        >
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div>
                      <p class="text-sm">
                        <span class="text-white">Name:</span>
                        <span class="text-[#5CF8AD] font-semibold"
                          >Mr Akin Opatola</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Organization:</span>
                        <span class="text-[#5CF8AD]">FNIVS,RSV,FCAI,PSLC</span>
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Position Held:</span>
                        <span class="text-[#5CF8AD]">Chapter President</span>
                      </p>
                      <p class="text-sm">
                        <span class="text-white">To Do:</span>
                        <span class="text-[#5CF8AD] font-medium">Panelist</span>
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div>
                      <p class="text-sm">
                        <span class="text-white">Name:</span>
                        <span class="text-[#5CF8AD] font-semibold"
                          >Mr Kehinde Osinaike</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Organization:</span>
                        <span class="text-[#5CF8AD]">LASPPA</span>
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Position Held:</span>
                        <span class="text-[#5CF8AD]">General Manager</span>
                      </p>
                      <p class="text-sm">
                        <span class="text-white">To Do:</span>
                        <span class="text-[#5CF8AD] font-medium">Panelist</span>
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div>
                      <p class="text-sm">
                        <span class="text-white">Name:</span>
                        <span class="text-[#5CF8AD] font-semibold"
                          >Mr Gbenga Ismail</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Organization:</span>
                        <span class="text-[#5CF8AD]"
                          >Nigeria Institute Of Estate Surveyor And Valuers
                          (NIESU)</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Position Held:</span>
                        <span class="text-[#5CF8AD]"></span>
                      </p>
                      <p class="text-sm">
                        <span class="text-white">To Do:</span>
                        <span class="text-[#5CF8AD] font-medium">Panelist</span>
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div>
                      <p class="text-sm">
                        <span class="text-white">Name:</span>
                        <span class="text-[#5CF8AD] font-semibold"
                          >Arc. Gbolahan Owodunni Oki</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Organization:</span>
                        <span class="text-[#5CF8AD]"
                          >Lagos State Building Control Agency (LASBCA)</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Position Held:</span>
                        <span class="text-[#5CF8AD]">Permanent Secretary</span>
                      </p>
                      <p class="text-sm">
                        <span class="text-white">To Do:</span>
                        <span class="text-[#5CF8AD] font-medium">Panelist</span>
                      </p>
                    </div>
                    <hr class="border-white border-opacity-30" />
                    <div>
                      <p class="text-sm">
                        <span class="text-white">Name:</span>
                        <span class="text-[#5CF8AD] font-semibold"
                          >Surveyor David Elegbede</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Organization:</span>
                        <span class="text-[#5CF8AD]"
                          >Geosys Nigeria Limited</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">Position Held:</span>
                        <span class="text-[#5CF8AD]"
                          >Director of Operations</span
                        >
                      </p>
                      <p class="text-sm">
                        <span class="text-white">To Do:</span>
                        <span class="text-[#5CF8AD] font-medium">Panelist</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 07 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">07:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    12:40 pm - 12:50 pm
                  </p>
                  <p class="text-sm">Audience Feedback and Questions</p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 08 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">08:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    12:50 pm - 01:30 pm
                  </p>
                  <p class="text-sm">Lunch Break/ Networking</p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 08 (second) -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-3xl w-16">09:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    01:30 pm - 01:40 pm
                  </p>
                  <p class="text-sm">Stakeholder Pledge & Digital Signature</p>
                </div>
              </div>
            </div>

            <hr class="border-white border-opacity-30" />

            <!-- 09 -->
            <div>
              <div class="flex items-start space-x-4">
                <span class="font-bold text-2xl w-16">10:</span>
                <div class="border-l-2 border-[#FFFFFF] pl-4 flex-1">
                  <p class="text-base font-semibold mb-1">
                    01:50 pm - 02:00 pm
                  </p>
                  <p class="text-sm mb-2">Vote of Thanks</p>
                  <p
                    class="bg-[#379700] text-[#000000] px-2 py-1 text-xs font-medium inline-block"
                  >
                    By: Kunle Adebiyi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="text-center mt-8 pt-6 border-t-2 border-[#FFFFFF]">
            <p class="text-3xl font-lufga-medium text-white tracking-wider">
              Departure
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="relative z-10 text-center pb-6">
      <p class="text-gray-500 text-sm">© 2024 LAWMA. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref({});

function openImg(url) {
  window.open(url, "_blank");
}

onMounted(() => {
  const user = window.localStorage.getItem("data");
  data.value = JSON.parse(user);
});
</script>
