import { useCallback } from "react";
import { useRouter } from 'next/router';

const Event1 = () => {
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
        height: "3856px",
        overflow: "hidden",
        background:'#f7fafa',
        textAlign: "left",
        fontSize: "24px",
        color: "#000",
        fontFamily: "'Lexend Deca'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "5343px",
          left: "111px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "20px",
          fontSize: "48px",
          color: "#fff",
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
          APA KATA MEREKA
        </div>
        <div
          style={{
            position: "relative",
            fontSize: "28px",
            letterSpacing: "0.01em",
            lineHeight: "40px",
            fontWeight: "600",
          }}
        >
          ⭐ 4.6 | 30 Ulasan di Google
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "5369px",
          left: "1251px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "10px",
            transform: " rotate(-180deg)",
            transformOrigin: "0 0",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              border: "3px solid #fff",
              boxSizing: "border-box",
              width: "66px",
              height: "66px",
              zIndex: "0",
            }}
          />
          <img
            style={{
              position: "absolute",
              margin: "0",
              top: "20px",
              left: "27px",
              width: "13px",
              height: "25px",
              zIndex: "1",
            }}
            alt=""
            src="/vector-7.svg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "10px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              border: "3px solid #fff",
              boxSizing: "border-box",
              width: "66px",
              height: "66px",
              zIndex: "0",
            }}
          />
          <img
            style={{
              position: "absolute",
              margin: "0",
              top: "20px",
              left: "27px",
              width: "13px",
              height: "25px",
              zIndex: "1",
            }}
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "189px",
          left: "calc(50% - 641px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          fontSize: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "12px",
              textAlign: "left",
              fontSize: "28px",
              color: "#d90027",
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
              EVENT
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
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
                IKUTI KEGIATAN DIMARKAS
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              boxShadow: "0px 12px 61px -3px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              textAlign: "left",
              fontSize: "28px",
              color: "#bcbcbc",
            }}
          >
            <div
              style={{
                flex: "1",
                position: "relative",
                borderRadius: "100px",
                backgroundColor: "#fff",
                boxShadow: "0px 12px 29px 9px rgba(0, 0, 0, 0.03)",
                height: "88px",
                zIndex: "0",
              }}
            />
            <div
              style={{
                position: "absolute",
                margin: "0",
                top: "23px",
                left: "50px",
                letterSpacing: "-0.01em",
                lineHeight: "40px",
                fontWeight: "300",
                zIndex: "1",
              }}
            >
              Cari event yang ada di MARKAS Surabaya
            </div>
            <img
              style={{
                position: "absolute",
                margin: "0",
                top: "20px",
                left: "1196px",
                width: "48px",
                height: "48px",
                zIndex: "2",
              }}
              alt=""
              src="/funnelsimple.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              border: "1px solid #000",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              textAlign: "left",
              fontSize: "28px",
            }}
          >
            <div
              style={{
                boxShadow: "0px 12px 61px -3px rgba(0, 0, 0, 0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                position: "relative",
              }}
            >
              <div
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "10px",
                  left: "calc(50% - 629px)",
                  width: "1259px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 48px 0px 4px",
                  boxSizing: "border-box",
                  zIndex: "0",
                  border: "1px solid",
                                      borderRadius: "42px",

                }}
              >
                <div
                  style={{
                    borderRadius: "42px",
                    backgroundColor: "#da1f3e",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "18px 28px",
                    color: "#fff",
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
                    Kegiatan Hari ini
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Minggu ini
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Meeting
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Workshop
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    lineHeight: "40px",
                    fontWeight: "600",
                  }}
                >
                  Talkshow
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1279px",
              marginTop:"100px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "48px",
            }}
          >
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-4@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "399px",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HUSTLER</p>
                  <p style={{ margin: "" }}>EPS. 39 - SCRUM FRAMEWORK</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-41@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-81@2x.png"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "399px",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HIPSTER</p>
                  <p style={{ margin: "" }}>EPS. 02 - UX DESIGNER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-42@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
                   style={{
                    position: "absolute",
                    left: "0px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "399px",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HACKER</p>
                  <p style={{ margin: "" }}>EPS. 16 - DATA ENGINEER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1279px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "48px",
            }}
          >
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-4@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
               style={{
                position: "absolute",
                left: "0px",
                fontWeight: "600",
                display: "inline-block",
                width: "399px",
                flexShrink: "0",
                zIndex: "1",
              }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HUSTLER</p>
                  <p style={{ margin: "" }}>EPS. 39 - SCRUM FRAMEWORK</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-41@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-81@2x.png"
                />
                <div
               style={{
                position: "absolute",
                left: "0px",
                fontWeight: "600",
                display: "inline-block",
                width: "399px",
                flexShrink: "0",
                zIndex: "1",
              }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HIPSTER</p>
                  <p style={{ margin: "" }}>EPS. 02 - UX DESIGNER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-42@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
                 style={{
                  position: "absolute",
                  left: "0px",
                  fontWeight: "600",
                  display: "inline-block",
                  width: "399px",
                  flexShrink: "0",
                  zIndex: "1",
                }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HACKER</p>
                  <p style={{ margin: "" }}>EPS. 16 - DATA ENGINEER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1279px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "48px",
            }}
          >
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-4@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "399px",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HUSTLER</p>
                  <p style={{ margin: "" }}>EPS. 39 - SCRUM FRAMEWORK</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-41@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-81@2x.png"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "399px",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HIPSTER</p>
                  <p style={{ margin: "" }}>EPS. 02 - UX DESIGNER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-42@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
                   style={{
                    position: "absolute",
                    left: "0px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "399px",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HACKER</p>
                  <p style={{ margin: "" }}>EPS. 16 - DATA ENGINEER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1279px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "48px",
            }}
          >
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-4@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
               style={{
                position: "absolute",
                left: "0px",
                fontWeight: "600",
                display: "inline-block",
                width: "399px",
                flexShrink: "0",
                zIndex: "1",
              }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HUSTLER</p>
                  <p style={{ margin: "" }}>EPS. 39 - SCRUM FRAMEWORK</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-41@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-81@2x.png"
                />
                <div
               style={{
                position: "absolute",
                left: "0px",
                fontWeight: "600",
                display: "inline-block",
                width: "399px",
                flexShrink: "0",
                zIndex: "1",
              }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HIPSTER</p>
                  <p style={{ margin: "" }}>EPS. 02 - UX DESIGNER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
            <div
              style={{
                width: "399px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "320px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-42@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "105px",
                    flexShrink: "0",
                    objectFit: "cover",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/rectangle-8@2x.png"
                />
                <div
                 style={{
                  position: "absolute",
                  left: "0px",
                  fontWeight: "600",
                  display: "inline-block",
                  width: "399px",
                  flexShrink: "0",
                  zIndex: "1",
                }}
                >
                  <p style={{ margin: "" }}>SEKOLAH BETA HACKER</p>
                  <p style={{ margin: "" }}>EPS. 16 - DATA ENGINEER</p>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#d90027",
                  border: "4px solid #000",
                  boxSizing: "border-box",
                  height: "47px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 0px 2px",
                  gap: "148px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                  }}
                >
                  SURABAYA
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "29px",
                    textAlign: "right",
                  }}
                >
                  SEPTEMBER 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "3351px",
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
          top: "3216px",
          left: "calc(50% - 675px)",
          borderRadius: "25px",
          width: "1350px",
          height: "560px",
          objectFit: "cover",
        }}
        alt=""
        src="/rectangle-48@2x.png"
      />
      <b
        style={{
          position: "absolute",
          top: "3267px",
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
          top: "3573px",
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
          top: "3282px",
          left: "876px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
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
          top: "3282px",
          left: "615px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
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
          top: "3352px",
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
          top: "3439px",
          left: "1060px",
          borderRadius: "50%",
          width: "474.28px",
          height: "465px",
          objectFit: "cover",
        }}
        alt=""
        src="/ellipse-1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "3282px",
          left: "1127px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
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
          top: "2836px",
          left: "1px",
          width: "1511px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "52px 0px",
          boxSizing: "border-box",
          gap: "48px",
          textAlign: "center",
          fontSize: "48px",
          color: "#d90027",
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
          MARI BERKOLABORASI
        </div>
        <div
          style={{
            borderRadius: "110px",
            backgroundColor: "#d90027",
            width: "327px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 24px",
            boxSizing: "border-box",
            fontSize: "28px",
            color: "#fff",
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
            Booking
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

export default Event1;
