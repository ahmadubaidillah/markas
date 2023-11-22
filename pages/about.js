import { useCallback } from "react";
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push('/about');
  }, []);
  const onHomeTextClick = useCallback(() => {
    router.push('/');
  }, []);

  const onPhilosophyText1Click = useCallback(() => {
    // Please sync "About" to the project
  }, []);

  const onEventsTextClick = useCallback(() => {
    router.push('/event');
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "9085px",
        overflow: "hidden",
        background:'#f7fafa',
        textAlign: "left",
        fontSize: "28px",
        color: "#000",
        fontFamily: "'Lexend Deca'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "5017px",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "90px",
          color: "#d90027",
          fontFamily: "'Lexend Peta'",
          left:'10%',
          right:'10%',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "36px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "66px",
              fontWeight: "600",
            }}
          >
            KOLABORASI
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "44px",
              textAlign: "center",
              fontSize: "48px",
              color: "#000",
              fontFamily: "'Lexend Deca'",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "68px",
                textTransform: "uppercase",
                fontWeight: "800",
              }}
            >
              PUSAT KOLABORASI EKOSISTEM DIGITAL
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "20px",
                letterSpacing: "0.04em",
                lineHeight: "37px",
                fontWeight: "300",
              }}
            >
              <p style={{ margin: "" }}>
                Dalam Markas, kami visualisasikan semangat tersebut dalam area
                kerja bersama yang dapat
              </p>
              <p style={{ margin: "" }}>
                diakses para startup founder dan stakeholder startup.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
            height: "438px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            position: "relative",
            gap: "54px",
            textAlign: "center",
            fontSize: "64px",
            color: "#1e1e1e",
            fontFamily: "'Lexend Deca'",
          }}
        >
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "0px",
              left: "0px",
              height: "378px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              zIndex: "0",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#fff",
                width: "276px",
                height: "378px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "45px",
                left: "31px",
                width: "214px",
                height: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "44px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                👩‍💻👨‍💻
              </div>
              <div
                style={{
                  width: "214px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "18px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "30px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Founder Startup
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    color: "#000",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Tim Founder yang terdiri dari Hustler, Hipster, dan Hacker
                  mendapatkan ruang yang luas untuk bereksplorasi dan mewujudkan
                  startupnya.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "60px",
              left: "330px",
              height: "378px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              zIndex: "1",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#fff",
                width: "276px",
                height: "378px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "45px",
                left: "31px",
                width: "214px",
                height: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "44px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  letterSpacing: "0.01em",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                👩‍🎓👨‍🎓
              </div>
              <div
                style={{
                  width: "214px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "18px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "30px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Pakar Pendidikan
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    color: "#000",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Akademisi pendidikan dari berbagai universitas dan bidang akan
                  berkolaborasi bersama dalam penelitian agar tercapainya
                  validasi yang diperlukan.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "0px",
              left: "660px",
              height: "378px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              zIndex: "2",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#fff",
                width: "276px",
                height: "378px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "45px",
                left: "31px",
                width: "214px",
                height: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "44px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                👩‍💼👨‍💼
              </div>
              <div
                style={{
                  width: "214px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "18px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "30px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Praktisi Industri
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    color: "#000",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "60px",
              left: "990px",
              height: "378px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              zIndex: "3",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#fff",
                width: "276px",
                height: "378px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "45px",
                left: "31px",
                width: "214px",
                height: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "44px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                👩‍⚖️👨‍⚖️
              </div>
              <div
                style={{
                  width: "214px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "18px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "30px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Pemerintahan
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    color: "#000",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Dukungan dalam legalitas dan yuridis sangatlah diperlukan,
                  oleh karenanya ahli-ahli dalam hukum dihadirkan dalam suatu
                  forum diskusi terbuka.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "0px",
              left: "1320px",
              height: "378px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              zIndex: "4",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#fff",
                width: "276px",
                height: "378px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "45px",
                left: "31px",
                width: "214px",
                height: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "44px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                🕵️‍♀️🕵️‍♂️
              </div>
              <div
                style={{
                  width: "214px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "18px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "30px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Media Masa
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    color: "#000",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Dukungan media masa maupun cetak berguna bagi perkembangan
                  startup, oleh karenanya MARKAS bekerja bersama media yang
                  terpercaya.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "60px",
              left: "1650px",
              height: "378px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              zIndex: "5",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#fff",
                width: "276px",
                height: "378px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "45px",
                left: "31px",
                width: "214px",
                height: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "44px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                  display: "inline-block",
                  width: "142px",
                }}
              >
                👩‍🌾👨‍🌾
              </div>
              <div
                style={{
                  width: "214px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "18px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "30px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  Komunitas
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    color: "#000",
                    display: "inline-block",
                    width: "214px",
                  }}
                >
                  MARKAS berkolaborasi bersama komunitas untuk mewujudkan
                  startup yang memadai dan menjawab persoalan yang ada ditengah
                  masyarakat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "2009px",
          left: "calc(50% - 545px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "80px",
          color: "#d90027",
          fontFamily: "'Lexend Peta'",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "66px",
              fontWeight: "600",
            }}
          >
            FILOSOFI
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "35px",
              textAlign: "center",
              fontSize: "48px",
              color: "#000",
              fontFamily: "'Lexend Deca'",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "68px",
                textTransform: "uppercase",
                fontWeight: "800",
              }}
            >
              INLKUSIF dan KOLABORATIF
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "20px",
                letterSpacing: "0.04em",
                lineHeight: "37px",
                fontWeight: "300",
              }}
            >
              <p style={{ margin: "" }}>
                Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital
                adalah untuk berkolaborasi
              </p>
              <p style={{ margin: "" }}>
                membuat ekosistem startup Indonesia menjadi inklusif dan
                kolaboratif.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "36px",
            fontSize: "20px",
            fontFamily: "'Lexend Deca'",
          }}
        >
          <div
            style={{
              width: "1090px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "50px",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "16px",
                width: "500px",
                height: "320px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-5@2x.png"
            />
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 8px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.04em",
                  lineHeight: "37px",
                  fontWeight: "300",
                }}
              >
                Gain Knowledge
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "16px",
                  fontSize: "28px",
                  color: "#000",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Ruang Belajar
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "20px",
                    letterSpacing: "0.04em",
                    lineHeight: "37px",
                    fontWeight: "300",
                  }}
                >
                  MARKAS sangat mengedepankan kegunaan ruang untuk menunjang
                  aktivitas penggunanya.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1090px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "50px",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 8px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.04em",
                  lineHeight: "37px",
                  fontWeight: "300",
                }}
              >
                Get Mentored
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "16px",
                  fontSize: "28px",
                  color: "#000",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Tempat Berkonsultasi
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "20px",
                    letterSpacing: "0.04em",
                    lineHeight: "37px",
                    fontWeight: "300",
                  }}
                >
                  Fasilitas pertemuan singkat maupun diskusi panjang untuk
                  mengolah ide menjadi nyata.
                </div>
              </div>
            </div>
            <img
              style={{
                position: "relative",
                borderRadius: "16px",
                width: "500px",
                height: "319px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-51@2x.png"
            />
          </div>
          <div
            style={{
              width: "1090px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "50px",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "16px",
                width: "500px",
                height: "320px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-52@2x.png"
            />
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 9px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.04em",
                  lineHeight: "37px",
                  fontWeight: "300",
                }}
              >
                Expand Network
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "16px",
                  fontSize: "28px",
                  color: "#000",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Wadah Berkolaborasi
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "20px",
                    letterSpacing: "0.04em",
                    lineHeight: "37px",
                    fontWeight: "300",
                  }}
                >
                  Area kerja bersama yang dapat diakses para startup founder dan
                  stakeholder startup.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "3845px",
          left: "145px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "83px",
          color: "#d90027",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
            fontFamily: "'Lexend Peta'",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "66px",
              fontWeight: "600",
            }}
          >
            KARAKTERISTIK
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "35px",
              textAlign: "center",
              fontSize: "48px",
              color: "#000",
              fontFamily: "'Lexend Deca'",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "68px",
                textTransform: "uppercase",
                fontWeight: "800",
              }}
            >
              10 KARAKTER MARKAS
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "20px",
                letterSpacing: "0.04em",
                lineHeight: "37px",
                fontWeight: "300",
              }}
            >
              <p style={{ margin: "" }}>
                Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital
                adalah untuk berkolaborasi
              </p>
              <p style={{ margin: "" }}>
                membuat ekosistem startup Indonesia menjadi inklusif dan
                kolaboratif.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1222px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "21px",
            fontSize: "30px",
            color: "#000",
          }}
        >
          <div
            style={{
              borderRadius: "55px",
              height: "80.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🚀 VISIONARY
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "80.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              👟️ EXTRAMILE
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "79.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🧠 STRATEGIC
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "79.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🏆 GRIT
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "79.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              ⚖ INTEGRITY
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "79.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🎯 FOCUSED
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "80.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🚅 AGILE
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "79.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🔥 PASSION
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "80.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              📚 RESOURCEFUL
            </div>
          </div>
          <div
            style={{
              borderRadius: "55px",
              height: "80.4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 45px 20px 50px",
              boxSizing: "border-box",
              border: "1px solid",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "30px",
              }}
            >
              🎨 CREATIVE
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "10px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "100px",
              backgroundColor: "#d90027",
              width: "340px",
              height: "78px",
              zIndex: "0",
            }}
          />
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "17px",
              left: "59px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              zIndex: "1",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Cari Tahu Lebih
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "6335px",
          left: "calc(50% - 583px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "108px",
          textAlign: "center",
          fontSize: "48px",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "68px",
            textTransform: "uppercase",
            fontWeight: "800",
          }}
        >
          kerjasama dan AFILIASI
        </div>
        <div
          style={{
            width: "1166px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "43px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "25px",
                left: "47px",
                width: "266px",
                height: "168px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-14@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "25px",
                left: "78px",
                width: "204px",
                height: "168px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-22@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "24px",
                left: "58px",
                width: "238px",
                height: "173px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-16@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "63px",
                left: "50px",
                width: "261px",
                height: "85px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/sekolah-beta@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "50px",
                left: "66px",
                width: "228px",
                height: "109px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-15@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "61px",
                left: "55px",
                width: "251px",
                height: "91px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/group-7524@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "52px",
                left: "67px",
                width: "223px",
                height: "119px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-18@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "38px",
                left: "57px",
                width: "238px",
                height: "127px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-23@2x.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "19px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                width: "360px",
                height: "218px",
                zIndex: "0",
              }}
            />
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "19px",
                left: "27px",
                width: "309px",
                height: "181px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/image-19@2x.png"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1595px",
          left: "249px",
          fontSize: "36px",
          letterSpacing: "0.03em",
          lineHeight: "40px",
          fontWeight: "300",
          textAlign: "center",
          display: "inline-block",
          width: "1014px",
        }}
      >
        A hub for startup founders to grow with the ecosystem.
      </div>
      <div
        style={{
          position: "absolute",
          top: "1455px",
          left: "393px",
          fontSize: "128px",
          lineHeight: "66px",
          fontWeight: "600",
          fontFamily: "'Lexend Peta'",
          color: "#d90027",
        }}
      >
        MARKAS
      </div>
      <div
        style={{
          position: "absolute",
          top: "7835px",
          left: "calc(50% - 444px)",
          fontSize: "36px",
          letterSpacing: "0.03em",
          lineHeight: "40px",
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Gain Knowledge. Get Mentored. Expand Network.
      </div>
      <div
        style={{
          position: "absolute",
          top: "-111px",
          left: "-273px",
          width: "2058px",
          height: "1164px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "5px",
          }}
        >
          <div
            style={{ position: "relative", width: "2048px", height: "1152px" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "5px",
          }}
        >
          <img
            style={{
              position: "relative",
              width: "2048px",
              height: "1152px",
              objectFit: "cover",
            }}
            alt=""
            src="/20230824-185333@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "510px",
          left: "calc(50% - 517px)",
          fontSize: "36px",
          letterSpacing: "0.03em",
          lineHeight: "40px",
          textAlign: "center",
          display: "inline-block",
          width: "1014px",
          color: "#fff",
        }}
      >
        <span style={{ fontWeight: "300" }}>{`Ini cerita tentang `}</span>
        <b style={{ fontFamily: "'Lexend Peta'", color: "#d90027" }}>MARKAS</b>
        <span style={{ fontWeight: "300" }}> kita...</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8580px",
          left: "-3px",
          backgroundColor: "#d90027",
          border: "3px solid #000",
          boxSizing: "border-box",
          width: "1518px",
          height: "508px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "8445px",
          left: "calc(50% - 675px)",
          borderRadius: "25px",
          width: "1350px",
          height: "560px",
          objectFit: "cover",
        }}
        alt=""
        src="/rectangle-511@2x.png"
      />
      <b
        style={{
          position: "absolute",
          top: "8496px",
          left: "130px",
          fontSize: "40px",
          lineHeight: "68px",
          display: "inline-block",
          fontFamily: "'Lexend Peta'",
          color: "#d90027",
          width: "273px",
          height: "67px",
        }}
      >
        MARKAS
      </b>
      <div
        style={{
          position: "absolute",
          top: "8802px",
          left: "130px",
          width: "234px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "18.23px",
          fontFamily: "'Lexend Mega'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "13.68px",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "36.47px",
                height: "36.47px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/social-icons.svg"
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.11em",
                lineHeight: "22.79px",
                fontWeight: "600",
              }}
            >
              INSTAGRAM
            </div>
          </div>
          <img
            style={{
              position: "relative",
              width: "11.41px",
              height: "11.41px",
            }}
            alt=""
            src="/vector.svg"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "13.68px",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "36.47px",
                height: "36.47px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/social-icons1.svg"
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.11em",
                lineHeight: "22.79px",
                fontWeight: "600",
              }}
            >
              YOUTUBE
            </div>
          </div>
          <img
            style={{
              position: "relative",
              width: "11.41px",
              height: "11.41px",
            }}
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8511px",
          left: "876px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
          fontSize: "24px",
          fontFamily: "'Lexend Mega'",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "22px",
            color: "#d90027",
            fontFamily: "'Lexend Deca'",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.08em",
              lineHeight: "30px",
              fontWeight: "300",
            }}
          >
            CONTACT US
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.09em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            BOOKING
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.09em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            FAQ
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8511px",
          left: "615px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
          fontSize: "24px",
          fontFamily: "'Lexend Mega'",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "22px",
            color: "#d90027",
            fontFamily: "'Lexend Deca'",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.08em",
              lineHeight: "30px",
              fontWeight: "300",
            }}
          >
            REGIONAL
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.09em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            SURABAYA
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.09em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            JAKARTA
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.09em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            BANDUNG
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.09em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            DENPASAR
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8581px",
          left: "130px",
          fontSize: "16px",
          letterSpacing: "0.02em",
          lineHeight: "29px",
          display: "inline-block",
          width: "381px",
        }}
      >
        MARKAS adalah tempat kolaborasi atau yang lebih dikenal dengan space
        yang bertujuan menjadi wadah tempat masyarakat melakukan perintisan
        Startup di kota-kota seluruh Indonesia maupun tempat belajar bagi para
        peminat teknologi perusahaan digital.
      </div>
      <img
        style={{
          position: "absolute",
          top: "8668px",
          left: "1060px",
          borderRadius: "50%",
          width: "474.28px",
          height: "465px",
          objectFit: "cover",
        }}
        alt=""
        src="/ellipse-2@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "8511px",
          left: "1127px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
          fontSize: "24px",
          fontFamily: "'Lexend Mega'",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "22px",
            color: "#d90027",
            fontFamily: "'Lexend Deca'",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.08em",
              lineHeight: "30px",
              fontWeight: "300",
            }}
          >
            ABOUT
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.11em",
              lineHeight: "30px",
              textTransform: "uppercase",
              fontWeight: "600",
              display: "inline-block",
              width: "200px",
              flexShrink: "0",
            }}
          >
            philosophy
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.11em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            EVENTS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.11em",
              lineHeight: "30px",
              fontWeight: "600",
            }}
          >
            CREDITS
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backdropFilter: "blur(100px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "10px",
          fontSize: "32px",
          color: "#d90027",
          fontFamily: "'Lexend Peta'",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "1512px",
            height: "112px",
            objectFit: "cover",
            zIndex: "0",
          }}
          alt=""
          src="/rectangle-21@2x.png"
        />
        <div
          style={{
            margin: "0",
            position: "absolute",
            top: "23px",
            left: "84px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: "1",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "66px",
              fontWeight: "600",
            }}
          >
            MARKAS
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "41px",
          left: "calc(50% - 278px)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "82px",
          fontSize: "22px",
          color: "#d90027",
        }}
      >
        <div
          style={{
            position: "relative",
            letterSpacing: "0.03em",
            lineHeight: "30px",
            fontWeight: "300",
          }}
          onClick={onHomeTextClick}

        >
          Home
        </div>
        <div
          style={{
            position: "relative",
            letterSpacing: "0.03em",
            lineHeight: "30px",
            fontWeight: "300",
            cursor: "pointer",
          }}
          onClick={onAboutTextClick}
        >
          About
        </div>
        <div
          style={{
            position: "relative",
            letterSpacing: "0.03em",
            lineHeight: "30px",
            fontWeight: "300",
            cursor: "pointer",
          }}
          onClick={onPhilosophyText1Click}
        >
          Philosophy
        </div>
        <div
          style={{
            position: "relative",
            letterSpacing: "0.03em",
            lineHeight: "30px",
            fontWeight: "300",
            cursor: "pointer",
          }}
          onClick={onEventsTextClick}
        >
          Events
        </div>
        <div
          style={{
            position: "relative",
            letterSpacing: "0.03em",
            lineHeight: "30px",
            fontWeight: "300",
          }}
        >
          Booking
        </div>
        <div
          style={{
            position: "relative",
            letterSpacing: "0.03em",
            lineHeight: "30px",
            fontWeight: "300",
            display: "inline-block",
            width: "125px",
            flexShrink: "0",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default About;
