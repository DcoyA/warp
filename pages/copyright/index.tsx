import BasicLayout from "@/components/layout/BasicLayout";
import PageLayout from "@/components/layout/PageLayout";
import UnderlineTextBar from "@/components/ui/UnderlineTextBar";
import Copyright_m from "@/components/mobile/Copyright_m";
import { FlexBox } from "@/components/ui/atoms";
import styled from "@emotion/styled";
import React from "react";
import Footer from "@/components/layout/Footer";

const CopyrightWrap = styled.div`
  display: block;
  height: 95%;
  color: #fff;
  @media (max-width: 759px) {
    display: none;
  }
  section {
    height: 80vh;
    display: flex;
    flex-direction: column;
  }
  article {
    position: relative;

    height: 40%;
    display: flex;
    flex-direction: column;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding: 4px 0;
  border-bottom: 1px solid #dadada;
`;

const Info = styled.div`
  height: 70%;
  overflow-y: scroll;
  margin-bottom: 30px;
  s &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Copyright() {
  return (
    <BasicLayout mobilePage={true} hasFooter={true}>
      <Copyright_m />
      <CopyrightWrap>
        <PageLayout url={"palace_background.png"}>
          <UnderlineTextBar
            title={"이용약관 / 개인정보처리방침 / Copyright"}
            fontSize={55}
          />
          <section>
            <article>
              <SubTitle>이용약관</SubTitle>
              <Info>
                {`제1조 (목적)
이 약관은 (주)아임웹 (이하 "회사")가 제공하는 아임웹 서비스 및 관련 제반 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조 (정의)
이 약관에서 사용하는 용어는 아래와 같습니다.

"회원"이라 함은 회사의 "서비스"에 접속하여 이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을 말합니다.
"아이디(ID)"라 함은 "회원"의 식별과 서비스 이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자와 숫자의 조합을 의미합니다.
"비밀번호"라 함은 "회원"이 부여 받은 "아이디와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 의미합니다.
"유료서비스"라 함은 "서비스" 중 "회사"가 유료로 제공하는 각종 웹사이트 구축 서비스 및 제반 서비스를 의미합니다.
"게시물" 혹은 "콘텐츠"이라 함은 회원이 서비스를 이용함에 있어 서비스상에 게시한 부호ᆞ문자ᆞ음성ᆞ음향ᆞ화상ᆞ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.
제3조 (약관의 게시와 개정)
"회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
"회사"는 "약관의규제에관한법률", "정보통신망이용촉진및정보보호에관한법률(이하 "정보통신망법")" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
제4조 (약관의 해석)
회사는 개별 서비스에 대해서는 별도의 이용약관 및 정책("기타 약관 등"이라 함)을 둘 수 있으며, 해당 내용이 이 약관과 상충할 경우에는 "기타 약관 등"이 우선하여 적용됩니다.
이 약관에서 정하지 아니한 사항이나 해석에 대해서는 "기타 약관 등" 및 관계법령 또는 상관례에 따릅니다.
제5조 [이용계약 체결]
이용계약은 "회원"이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 "회사"가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
"회사"는 "가입신청자"의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, "회사"는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
실명이 아니거나 타인의 명의를 이용한 경우
허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우
14세 미만 아동이 정보통신망 이용촉진 및 정보보호등에 관한 법률에서 정한 "개인정보" 입력 시 법정대리인(부모 등)의 동의를 얻지 아니한 경우
이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우
"회원"이 유료서비스를 이용하는 경우 이용대금을 납부한 후 서비스를 이용하는 것을 원칙으로 하며, 유료서비스 이용계약의 성립시기는 "구매완료"를 신청절차 상에서 표시한 시점으로 합니다.
"회사"는 만 20세 미만의 미성년회원이 유료서비스를 이용하고자 하는 경우에 부모 등 법정대리인의 동의를 얻거나, 계약체결 후 추인을 얻지 않으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 계약체결 전에 고지하는 조치를 취합니다.
"회사"는 서비스관련설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.
제2항과 제3항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, "회사"는 원칙적으로 이를 가입신청자에게 알리도록 합니다.
이용계약의 성립 시기는 "회사"가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.
"회사"는 "회원"에 대해 회사정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
제6조 (회원정보의 변경)
"회원"은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 아이디 등은 수정이 불가능합니다.
"회원"은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 "회사"에 대하여 그 변경사항을 알려야 합니다.
제2항의 변경사항을 "회사"에 알리지 않아 발생한 불이익에 대하여 "회사"는 책임지지 않습니다.

제7조 (개인정보보호 의무)
"회원이" "회사"의 "서비스"에 제공하는 정보 일체는 개인정보처리방침에 따르며, "회사"가 귀하의 정보를 수집 및 이용하는 행위는 동 정책에 따라 규율됩니다. "회원"은 본 서비스를 이용함으로써 "회사"가 "회원"의 정보를 수집 및 이용(개인정보처리방침에서 규정하는 바와 같음)하는 것에 동의하는 것으로 간주된다는 사실을 인지하고 있습니다. "회원"에게 본 서비스를 제공하는 것의 일환으로, "회사"는 서비스 관련 공지사항 및 행정적 사안에 관한 메시지를 비롯한 전달사항을 제공할 필요가 있을 수 있습니다.

제8조 ("회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무)
"회원"은 본 서비스에서 사용하는 비밀번호와 관련된 모든 행동을 보호/관리해야 합니다. "회사"는 귀하의 계정에 비밀번호를 강력한 암호(대문자, 소문자 및 숫자, 기호의 조합)로 설정할 것을 권장합니다. "회사"는 위 사항을 만족하지 못했을 때 일어난 어떠한 손실이나 피해에 대해 책임지지 않습니다. "회사"는 "서비스"를 안전하게 유지하기 위해 최선을 다하고 있지만 안전을 보장할 수는 없습니다.

제9조 ("회원"에 대한 통지)
"회사"가 "회원"에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 "회원"이 지정한 전자우편주소, 서비스 내 전자메모 및 쪽지 등으로 할 수 있습니다.
"회사"는 "회원" 전체에 대한 통지의 경우 7일 이상 "회사"의 게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다.
제10조 ("회사"의 의무)
"회사"는 관련법과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 "서비스"를 제공하기 위하여 최선을 다하여 노력합니다.
"회사"는 "회원"이 안전하게 "서비스"를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보보호정책을 공시하고 준수합니다.
"회사"는 서비스이용과 관련하여 "회원"으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을 통하여 "회원"에게 처리과정 및 결과를 전달합니다.
"회사"는 다음의 사항을 해당 " 유료서비스"의 이용초기화면이나 그 포장, FAQ 등에 "회원"이 알기 쉽게 표시합니다.
유료서비스의 명칭 또는 제호
유료서비스의 내용, 이용방법, 이용료, 결제방법 기타 이용조건
이용가능 기기 및 이용에 필요한 최소한의 기술사양
제11조 (서비스 이용의 중지 또는 계약의 해지)
"회원"은 다음 행위를 하여서는 안 됩니다.
신청 또는 변경 시 허위내용의 등록
타인의 정보도용
"회사"에 게시된 정보의 변경
"회사"가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
"회사"와 기타 제3자의 저작권 등 지적재산권에 대한 침해
"회사" 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 "회사"에 공개 또는 게시하는 행위
검색엔진 스팸, 도어웨어 페이지, 타 서비스와 매우 유사한 페이지 등 내용이 현저히 저급하거나 빈약하고 사용자에게 뚜렷한 부가 가치를 제공하지 않는 행위
회사에서 별도 규정한 콘텐츠 원칙에 어긋나거나, 성격에 부합하지 않는 행위
기타 불법적이거나 부당한 행위
"회원"은 관계법, 본 약관의 규정, 이용안내 및 "서비스"와 관련하여 공지한 주의사항, "회사"가 통지하는 사항 등을 준수하여야 하며, 기타 "회사"의 업무에 방해되는 행위를 하여서는 안 됩니다.
제12조 (서비스의 제공 등)
서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
"회사"는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 "회사"는 제9조("회원"에 대한 통지)에 정한 방법으로 "회원"에게 통지합니다. 다만, "회사"가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
"회사"는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공시한 바에 따릅니다.
사업종목의 전환, 사업의 포기 등의 이유로 "유료서비스"를 제공할 수 없게 되는 경우에는 "회사"는 제9조(회원에 대한 통지)에서 정한 방법으로 "회원"에게 통지하고 당초 "회사"에서 제시한 조건에 따라 "회원"에게 보상합니다.
제13조 (서비스의 변경)
"회사"는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다. 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전 7일 이상 해당 서비스 초기화면에 게시하여야 합니다.
"회사"는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.
"유료서비스"의 변경 내용이 중대하거나 "회원"에게 불리한 경우에는 "회사"가 해당 "유료서비스"를 제공받는 "회원"에게 제9조(회원에 대한 통지)에서 정한 방법으로 "회원"에게 통지합니다. 이때, "회사"는 동의를 거절한 "회원"에 대해서는 변경 전 서비스를 제공합니다. 다만, 그러한 서비스 제공이 불가능할 경우 해당 서비스의 제공을 중지하거나 계약을 중단할 수 있으며 이 경우 환불은 제19조 2항에 따라 진행됩니다.
제14조 (정보의 제공)
"회사"는 "회원"이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로 "회원"에게 제공할 수 있습니다. 다만, "회원"은 관련법에 따른 거래관련 정보, 고객센터 답변 등을 제외하고 언제든지 전자우편 등을 통하여 수신 거절을 할 수 있습니다.
제1항의 정보를 전화 및 모사전송기기에 의하여 전송하려고 하는 경우에는 "회원"의 사전 동의를 받아서 전송합니다.
제15조 (게시물의 저작권)
"회원"이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.
"회원"이 "서비스" 내에 게시하는 "콘텐츠"는 검색결과 내지 "서비스" 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, "회원"은 언제든지 고객센터 또는 "서비스" 내 관리기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.
"회사"는 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 회원의 동의를 얻어야 합니다.
제16조 (게시물의 관리)
"회원"의 게시물이 "정보통신망법" 및 "저작권법"등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, "회사"와 "회원"은 관련법에 따라 조치를 취하여야 합니다.
"회사"는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.
제17조 (권리의 귀속)
"서비스"에 대한 저작권 및 지적재산권은 회사에 귀속됩니다. 단, 회원의 게시물 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.
"회사"는 서비스와 관련하여 회원에게 회사가 정한 이용조건에 따라 계정, 아이디, 콘텐츠 등을 이용할 수 있는 이용권만을 부여하며, "회원"은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.
제18조 ("회원"의 계약해제, 해지 등)
"회원"은 언제든지 자기 정보 관리 메뉴를 통하여 서비스 탈퇴 신청을 할 수 있으며, "회사"는 관련법 등이 정하는 바에 따라 이를 즉시 처리하여야 합니다.
"회원"이 계약을 해지할 경우, 관련법 및 개인정보보호정책에 따라 회사가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 데이터는 소멸됩니다.
"회원"이 계약을 해지하는 경우, 본인 계정에 등록된 모든 데이터 일체는 삭제됩니다 .
제19조 (환불)
"회사"는 약정된 "유료서비스"의 하자를 회사가 보완, 수정할 수 없어 서비스가 이루어지지 않거나 정상적 이용이 불가능한 경우 회원이 결제한 전액을 환불합니다.
"회사"는 제12조 4항, 제18조 및 제20조에 따른 계약해지가 발생하거나, "회원"이 "유료서비스" 이용계약을 해지할 수 있으나, 법적으로 요구되지 않는 한 요금은 환불되지 않습니다.
"회사"는 과오금이 발생한 경우 이용대금의 결제와 동일한 방법으로 과오금 전액을 환불하여야 하며 "회사"가 과오금에 대한 환불을 거부할 경우 "회사"는 정당하게 이용대금이 부과되었음을 입증할 책임을 집니다.
회사는 결제와 동일한 방법으로 환불을 진행하며, 결제와 동일한 방법으로 환불이 불가능한 때는 이를 사전에 고지합니다. 다만, 수납확인이 필요한 결제수단의 경우에는 수납확인일로부터 3영업일 이내에 이를 환불하도록 합니다.
환불 진행 시, 환불 금액 정산은  다음과 같은 규칙으로 진행됩니다.
할인율 적용은 계약 기간을 정상적인 만기 형태로 이용한다는 전제로 제공된 것이며 중도 환불 시 할인율 적용 금액이 아닌 표준 금액 요금으로 정산됩니다.
할인율 적용이 아닌 표준 금액의 월 요금 기준으로 일할 계산 후 선납한 이용요금에서 사용된 기간의 금액을 제외한 잔액의 90%를 정산합니다.
환불 신청일로부터 15일 이내 환불 조치 됩니다.
환불되지 않는 10%는 고객 귀책 사유로 인해 서비스를 해지한 위약금으로 처리됩니다.
단, 정산된 환불 잔액의 90%가 0원인 경우 환불하지 않습니다.
제20조 (이용제한 등)
"회사"는 "회원"이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 서비스 이용을 경고, 일시정지, 계약해지로 단계적으로 제한할 수 있습니다 .
"회사"는 전항에도 불구하고, "주민등록법"을 위반한 명의도용 및 결제도용, "저작권법" 및 "컴퓨터프로그램보호법"을 위반한 불법프로그램의 제공 및 운영방해, "정보통신망법"을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 계약해지를 할 수 있습니다. 본 항에 따른 계약해지 시 서비스 이용을 통해 획득한 혜택 등도 모두 소멸되며, 회사는 이에 대해 별도로 보상하지 않습니다.
"회사"는 무료회원이 계속해서 3개월 이상 로그인하지 않는 경우, 회원정보의 보호 및 운영의 효율성을 위해 이용을 제한할 수 있습니다 .
회사는 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은 이용제한정책 등에서 정한 바에 의합니다 .
본 조에 따라 서비스 이용을 제한하거나 계약을 해지하는 경우에는 "회사"는 제9조["회원"에 대한 통지]에 따라 통지합니다.
"회원"은 본 조에 따른 이용제한 등에 대해 "회사"가 정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고 회사가 인정하는 경우 회사는 즉시 서비스의 이용을 재개합니다.
제21조 (서비스 일시중지 등에 의한 회원 피해보상)
"회사"는 "유료서비스"를 고객에게 제공하는 기간 동안 최대의 월별 가동 시간을 제공하기 위해 합리적인 노력을 기울여야 합니다. “유료서비스"에 포함된 서비스 책임을 충족하지 못할 경우, 고객은 하기 정의된 서비스 보상안을 고객지원 등을 통해 청구할 수 있습니다. 단, 사전에 고지된 정기점검 등의 시간은 월별 가동시간 산정에 포함되지 않습니다.

월별 가동 중지 시간 3시간 이상 발생시 최근 3개월(3개월 미만인 경우 해당 기간 적용)의 1일 평균 요금에 서비스 제공중지시간을 24로 나눈 수를 곱하여 산출한 금액의 5배 범위 내에서 협의 후 배상합니다.
보상은 보상안 협의 완료 후 3영업일 이내에 지급합니다.
제22조 (책임의 한계)
"회사"는 천재지변 또는 이에 준하는 불가항력으로 인하여 "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한 책임이 면제됩니다.
"회사"는 "회원" 의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
"회사"는 "회원"이 "서비스"와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
"회사"는 "회원" 간 또는 "회원"과 제3자 상호간에 "서비스"를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.
"회사"는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.
“회사"는 "회원"이 "서비스"를 이용하여 기대하는 수익을 보장하지 않습니다. 또한 이와 관련된 손해는 배상하지 않습니다.
제23조 (준거법 및 재판관할)
"회사"와 "회원" 간 제기된 소송은 대한민국법을 준거법으로 합니다.
"회사"와 "회원"간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제소합니다.`}
              </Info>
            </article>
            <article>
              <SubTitle>개인정보 처리방침</SubTitle>
              <Info>
                {`제1조 (개인정보 수집에 대한 동의)
아임웹은 고객님께서 개인정보처리방침 또는 이용약관의 내용에 동의한다 또는 동의하지 않는다 버튼을 클릭할 수 있는 절차를 마련하고 있으며, 동의한다 버튼을 클릭하면 개인정보 수집 에 동의한 것으로 봅니다.

제2조 (개인정보의 수집,이용,제공에 대한 동의철회)
회원가입 등을 통한 개인정보의 수집, 이용, 제공과 관련해 귀하는 동의하신 내용을 언제든지 철회 하실 수 있습니다. 동의철회는 홈페이지 프로필 버튼을 누른 후 마이페이지의 회원정보 수정에서 "회원탈퇴"를 클릭하면 개인정보의 수집,이용,제공에 대한 동의를 바로 철회할 수 있으며, 개인정보보호책임자에게 서면, 전화, 이메일 등으로 연락하시면 회사는 즉시 회원 탈퇴를 위해 필요한 조치를 취합니다. 동의를 철회하고 개인정보를 파기하는 등의 조치가 있으면 그 사실을 귀하께 지체없이 통지하도록 하겠습니다.
아임웹은 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보를 수집하는 방법보다 쉽게 할 수 있도록 필요한 조치를 취합니다.
SNS 계정을 통해 인증(로그인)한 고객은 회원정보 수정에서 SNS계정 연동해제를 할 수 있습니다. 또한 각 SNS 제공업체에서 SNS연동해제를 할 수 있습니다. 그러나 SNS 연동해제를 하더라도 아임웹에 보관중인 고객정보가 삭제되는 것은 아니므로 회원탈퇴를 진행하셔야 개인정보가 파기됩니다.
제3조 (개인정보의 처리 목적)
아임웹은 다음의 목적을 위하여 개인정보를 처리합니다.

개인정보 활용 업무	개인정보 처리 목적
회원 관리	
회원제 서비스 이용에 따른 회원 식별
가입의사 확인, 가입 및 가입횟수 제한
고객상담, 고객불만 접수 및 처리, 분쟁조정을 위한 기록보존
고지사항 전달
서비스 결제	
서비스 및 콘텐츠 제공
물품배송 또는 청구서 등 발송
구매 및 요금 결제
요금 추심
마케팅 및 광고	
고객에게 최적화된 서비스 제공
신규 서비스(제품) 개발 및 특화
웹페이지 접속 빈도 파악
상품/서비스의 이용실적 분석
정기 간행물 발송, 새로운 상품 또는 서비스 안내
고객 관심사에 부합하는 웹서비스 및 이벤트 기획
경품행사, 이벤트 등 광고성 정보 전달 또는 회원 참여 공간 운영
고객대상 설문조사
서비스 및 상품 안내
처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
아임웹은 만 14세 미만 아동에 대하여 개인정보를 수집을 하지 않습니다.
제4조 (개인정보의 처리 및 보유 기간)
아임웹은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
아임웹의 서비스 별 개인정보 처리 및 보유 기간은 다음과 같습니다.

서비스 명	수집항목	보유 및 이용기간
회원 가입 공통	(필수) 닉네임, 이름, 생년월일, 이메일, 비밀번호, 휴대전화번호, 연계정보(CI)	회원 탈퇴 시
SNS계정을 통한 간편가입 고객	- Google: (필수) 닉네임(이름) 이메일 주소
- 네이버: (필수) 이름, 이메일 주소, 별명, 프로필사진 (선택) 성별, 생일, 연령대
- Facebook: (필수) 이름 및 프로필 사진, 이메일 주소	회원 탈퇴 시
서비스 결제	입금자명, 신용카드 종류, 요금청구 및 결제 기록	5년
전자거래 등에서의 소비자 보호에 관한 법률에 따른 표시.광고, 계약내용 및 이행 등 거래에 관한 기록

표시.광고: 6개월
계약 또는 청약철회, 대금결제, 재화 등의 공급 기록: 5년
소비자 불만 또는 분쟁 처리에 관한 기록: 3년
통신비밀보호법에 따른 통신사사실확인자료 보관

컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료: 3개월
제5조 (처리하는 개인정보의 항목)
아임웹은 다음의 개인정보 항목을 수집 및 처리하고 있습니다.

개인정보 활용 업무	개인정보 수집항목
회원 가입 시	필수 항목: 닉네임, 이름, 생년월일, 이메일, 비밀번호, 휴대전화번호, 연계정보(CI)
서비스 결제 시	필수 항목: 입금자명, 암호화된 신용카드번호, 유효기간, 생년월일(개인) 또는 사업자등록번호(법인), 요금 청구 및 결제 기록
일부 서비스 이용 시

상세사항 확인
제6조 (개인정보의 제3자 제공에 관한 사항)
아임웹은 고객님의 개인정보를 가입신청서, 서비스이용약관, 개인정보처리방침」의「개인정보의 수집 및 이용목적에서 알린 범위 내에서 사용하며, 이 범위를 초과하여 이용하거나 타인 또는 다른 기업, 기관에 제공하지 않습니다. 단, 고객의 동의가 있거나 법령에 의하여 정해진 절차에 따라 정보를 요청받은 경우는 예외로 하며, 이 경우 주의를 기울여 개인정보를 이용 및 제공할 수 있습니다.
제7조 (개인정보처리의 위탁에 관한 사항)
아임웹은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.

위탁받는 자(수탁자)	위탁업무	보유 및 이용기간
인포빕(유)	문자메시지 발송, 카카오톡 알림톡(정보성 메시지) 발송 업무	회원탈퇴 및 위탁 계약 만료 때 까지
채널코퍼레이션	고객상담 시스템 제공
(카카오톡 아임웹 채널로 진입하여 상담 시, 채널코퍼레이션 시스템 내 연동으로 적용되어 기존 상담이력 연동하여 상담제공)
GS네오텍	클라우드 시스템 운영
스티비 주식회사	뉴스레터 발송 시스템 제공
KG이니시스	휴대전화 및 간편 인증서 본인확인 서비스 제공
KG이니시스	신용카드, 가상계좌, 실시간계좌이체결제 및 매입업무 대행
두들린	아임웹 채용 관리 시스템 제공	접수 지원 후 3년
아임웹은 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
제8조 (개인정보의 파기절차 및 파기방법)
아임웹은 개인정보 보유기간의 경과, 처리 목적이 달성된 후 5일 이내에 지체없이 파기 합니다.
정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
아임웹에서 개인정보를 파기할 때는 다음과 같은 방법으로 파기합니다.
전자적 파일 형태인 경우: 복원이 불가능한 방법으로 영구 삭제
전자적 파일의 형태 외의 기록물, 인쇄물, 서면 및 그 밖의 기록 매체인 경우: 파쇄 또는 소각
제9조 (미이용자의 개인정보 분리보관 등에 관한 조치)
1년간 서비스를 이용하지 않은 이용자는 휴면계정으로 전환하고, 개인정보를 별도로 분리하여 보관합니다.
휴먼전환 30일 전까지 휴면예정 회원에게 별도 분리 보관되는 사실 및 휴면 예정일, 별도 분리 보관하는 개인정보 항목을 이메일, 문자 등 이용자에게 통지 가능한 방법으로 알리고 있습니다.
휴면계정으로 전환을 원하지 않으시는 경우, 휴면계정 전환 전 서비스 로그인을 하시면 됩니다. 또한, 휴면계정으로 전환되었더라도 로그인을 하는 경우 이용자의 동의에 따라 휴면계정을 복원하여 정상적인 서비스를 이용할 수 있습니다.
제10조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
정보주체는 아임웹에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
제1항에 따른 권리 행사는 아임웹에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 아임웹은 이에 대해 지체 없이 조치하겠습니다.
제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
아임웹은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
제11조 (개인정보의 안전성 확보조치에 관한 사항)
아임웹은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

정기적인 자체 감사 실시 - 개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시하고 있습니다.
개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
해킹 등에 대비한 기술적 대책은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
개인정보의 암호화 - 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
접속기록의 보관 및 위변조 방지 개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다. 또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.
개인정보에 대한 접근 제한 - 개인정보를 처리하는 데이터베이스시스템에 대한 접근 권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는 안전한 장소에 보관하고 있습니다.
비인가자에 대한 출입 통제 - 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
제12조 (개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)
아임웹은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
아임웹은 서비스 이용기록, 이용 정지기록, 이용해지 기록, IP 주소, 접속로그를 자동수집하고 있습니다.
쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다.

쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.
쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
제13조 (개인정보 보호책임자에 관한 사항)
아임웹은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

개인정보 보호책임자

이름	박재완
직책	CPO
직급	부대표
연락처	privacy@imweb.me, 02-323-0105(FAX)
개인정보보호 담당부서

부서명	고객정보보호팀
이름	윤수진
연락처	privacy@imweb.me, 02-323-0105(FAX)
정보주체는 아임웹의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 아임웹은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
제14조 (개인정보의 열람청구를 접수·처리하는 부서)
정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 아임웹은 정보주체의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.

개인정보 열람청구 접수·처리 부서

부서명	고객정보보호팀
이름	윤수진
연락처	privacy@imweb.me, 02-323-0105(FAX)
제15조 (정보주체의 권익 침해에 대한 구제방법)
정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.

개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
대검찰청 : (국번없이) 1301 (www.spo.go.kr)
경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.

※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.

제16조 (영상정보처리기기 운영·관리에 관한 사항)
아임웹은 아래와 같이 영상정보처리기기를 설치·운영하고 있습니다.

영상정보처리기기 설치근거·목적 : 시설안전, 범죄 및 화재 예방, 인원, 차량의 출입관리 및 통제, 외부인 불법침입 방지
설치 대수, 설치 위치, 촬영 범위

설치대수: 6 대
설치위치: 모든 사무실 출입구
촬영범위: 출입문
관리책임자, 담당부서 및 영상정보에 대한 접근권한자: 배영훈
영상정보 촬영시간, 보관기간, 보관장소, 처리방법

촬영시간: 24 시간
보관기간: 촬영시부터 입력
보관장소 및 처리방법: 독립서버 백업
영상정보 확인 방법 및 장소: 관리대장 확인
정보주체의 영상정보 열람 등 요구에 대한 조치 : 개인영상정보 열람.존재 확인 청구서로 신청하여야 하며, 정보주체 자신이 촬영된 경우 또는 명백히 정보주체의 생명.신체.재산 이익을 위해 필요한 경우에 한해 열람을 허용함
영상정보 보호를 위한 기술적.관리적.물리적 조치
제17조 (개인정보 처리방침 변경)
이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.

이 개인정보처리방침은 2023년 7월 4일부터 적용됩니다.
이전의 개인정보 처리방침은 이전 개인정보처리방침에서 확인하실 수 있습니다.`}
              </Info>
            </article>
          </section>
        </PageLayout>
      </CopyrightWrap>
    </BasicLayout>
  );
}